const updateFirestore = require('./exportData');

const ELDER_TROPHIES = 4000,
    MIN_DONATIONS = 100,
    ELDER_DONATIONS = 400,
    MIN_MISSED_WARS = 0,
    MAX_MISSED_WARS = 2,
    MIN_WARS = 1,
    ELDER_WARS = 7,
    DAYS_NEW = 4,
    DEMOTION_DATE_DONATION_AVERAGE = 350;

let client;

module.exports = async importedClient => {
    client = importedClient;

    const inDemotionDateRange = await isInDemotionDateRange();
    const members = await getMembers();

    await updateFirestore(
        members,
        await countWars(),
        await getPromotions(),
        inDemotionDateRange ? await getProbations() : [],
        inDemotionDateRange ? await getDemotions() : [],
        getWarHistory,
        getClanHistory
    );
};

/* prettier-ignore */
const warDateSelect = 'war_participants.wardate >= (SELECT MAX(entrydate) FROM members) - interval \'30\' day';
/* prettier-ignore */
const dateSelect =
    'members._id = to_char((SELECT MAX(entrydate) FROM members), \'YYYY-MM-DD"T"HH24:MI:SS.MS"Z"\') || members.tag AND ' +
    '(war_participants.wardate IS NULL OR ' + warDateSelect + ') '

async function getWarHistory(tag) {
    /* prettier-ignore */
    return client
        .query(
            'SELECT ' + 
                'date_trunc(\'week\', wardate::date) as week, ' +
                'SUM(wins) AS wins, ' +
                '(SUM(battlesplayed) - SUM(wins)) AS losses, ' +
                'COUNT(wardate) AS wars, ' +
                'COUNT(wardate) FILTER (WHERE battlesplayed = 0) AS missed ' +
            'FROM war_participants ' +
            'WHERE tag = $1 AND ' +
                'date_trunc(\'week\', wardate::date) >= date_trunc(\'week\', (SELECT MAX(wardate) from war_participants) - interval \'28\' day) ' +
            'GROUP BY week ' +
            'ORDER BY week ', 
            [tag]
        )
        .then(result => result.rows);
}

async function getClanHistory(tag) {
    /* prettier-ignore */
    return client
        .query(
            'SELECT ' +
                'date_trunc(\'week\', entrydate::date) as week, ' +
                'donations, ' +
                'donationsreceived, ' +
                'trophies ' +
            'FROM members ' +
            'WHERE tag = $1 ' +
            'ORDER BY week ',
            [tag]
        )
        .then(result => result.rows);
}

async function countWars() {
    return client
        .query(
            'SELECT COUNT(*) ' +
                'FROM war_participants ' +
                'WHERE ' +
                warDateSelect +
                ' GROUP BY wardate'
        )
        .then(result => result.rows.length);
}

async function isInDemotionDateRange() {
    return client
        .query(
            'SELECT entrydate, SUM(donations) / COUNT(tag) as average ' +
                'FROM members ' +
                'WHERE entrydate = (SELECT MAX(entrydate) FROM members) ' +
                'GROUP BY entrydate'
        )
        .then(
            result => result.rows[0].average >= DEMOTION_DATE_DONATION_AVERAGE
        );
}

async function getMembers() {
    /* prettier-ignore */
    const members = 
        'SELECT ' +
            'members.tag, ' +
            'members.playername, ' +
            'members.trophies, ' +
            'members.clanrank, ' +
            'LOWER(members.clanrole) as role, ' +
            'members.donations, ' +
            'members.donationsreceived, ' +
            'COUNT(war_participants.wardate) AS wars, ' +
            'SUM(war_participants.battlesplayed) AS battles, ' +
            'SUM(war_participants.wins) AS wins, ' +
            '(SUM(war_participants.battlesplayed) - SUM(war_participants.wins)) AS losses, ' +
            'COUNT(war_participants.wardate) FILTER (WHERE war_participants.battlesplayed = 0) as missed ' +
        'FROM members ' +
        'FULL JOIN war_participants ON war_participants.tag = members.tag ' +
        'WHERE ' + dateSelect +
        'GROUP BY members._id ' +
        'ORDER BY members.clanrank';

    return client.query(members).then(result => result.rows);
}

async function getPromotions() {
    /* prettier-ignore */
    const promotion_query = 
        'SELECT members.tag, members.playername ' +
        'FROM members ' + 
            'FULL JOIN war_participants ON war_participants.tag = members.tag ' +
        'WHERE ' +
            'members.clanrole = \'member\' AND ' + //members only
            'members.trophies >= $1 AND ' + //trophies
            'members.donations >= $2 AND ' + //donations
            dateSelect +
        'GROUP BY members._id ' +
        'HAVING ' +
            'SUM(war_participants.battlesplayed) >= $3 AND ' + //battles
            'COUNT(war_participants.wardate) FILTER (WHERE war_participants.battlesplayed = 0) = 0'; //no missed battles

    const promotion_values = [ELDER_TROPHIES, ELDER_DONATIONS, ELDER_WARS];

    return client
        .query(promotion_query, promotion_values)
        .then(result => result.rows);
}

async function getDemotions() {
    /* prettier-ignore */
    const demotion_query =
        'SELECT members.tag, members.playername ' + 
        'FROM members ' +
            'FULL JOIN war_participants ON war_participants.tag = members.tag ' +
        'WHERE ' + dateSelect +
        'GROUP BY members._id ' +
        'HAVING ' + 
            '(members.donations < $1) OR ' + //donations
            '(SUM(war_participants.battlesplayed) IS NULL OR ' + //battles
                'SUM(war_participants.battlesplayed) < $2) OR ' + 
            '(COUNT(war_participants.wardate) FILTER ( ' +  //missed battle within last week
                'WHERE '+
                    'war_participants.battlesplayed = 0 AND ' +
                    'war_participants.wardate >= (SELECT MAX(entrydate) FROM members) - interval \'7\' day ' +
                ') > $3)';

    const demotion_values = [MIN_DONATIONS, MIN_WARS, MIN_MISSED_WARS];
    return client
        .query(demotion_query, demotion_values)
        .then(result => result.rows);
}

async function getProbations() {
    /* prettier-ignore */
    const probation_query =
        'SELECT members.tag, members.playername ' + 
        'FROM members ' +
            'FULL JOIN war_participants ON war_participants.tag = members.tag ' +
        'WHERE ' + dateSelect +
        'GROUP BY members._id ' +
        'HAVING ' +     
            '(COUNT(war_participants.wardate) FILTER ( ' +  //max missed battle within last week
                'WHERE '+
                    'war_participants.battlesplayed = 0 AND ' +
                    'war_participants.wardate >= (SELECT MAX(entrydate) FROM members) - interval \'7\' day ' +
                ') <= $1) AND (' +
            '((SELECT MIN(entrydate) FROM members mems WHERE mems.tag = members.tag) >= '+
                '((SELECT MAX(entrydate) FROM members mems WHERE mems.tag = members.tag) - interval \'' + DAYS_NEW + '\' day)) OR ' + //new
            '(members.donations >= $2) OR ' + //elder donations
            'SUM(war_participants.battlesplayed) >= $3)'; //elder wars
    const probation_values = [MAX_MISSED_WARS, ELDER_DONATIONS, ELDER_WARS];
    return client
        .query(probation_query, probation_values)
        .then(result => result.rows);
}
