const { Client } = require('pg');
const fs = require('fs-extra');

const ELDER_TROPHIES = 4000,
    MIN_DONATIONS = 100,
    ELDER_DONATIONS = 400,
    MAX_MISSED_WARS = 0,
    MIN_WARS = 1,
    ELDER_WARS = 6,
    WEEKS_NEW = 1;

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});

client
    .connect()
    .then(() => getMembers())
    .then(async members => {
        const promotions = await getPromotions();
        const probations = await getProbations();
        const demotions = await getDemotions();
        const wars = await client
            .query(
                'SELECT COUNT(*) FROM war_participants WHERE ' +
                    warDateSelect +
                    ' GROUP BY wardate'
            )
            .then(result => result.rows.length);

        return members.map(member => {
            if (
                promotions.find(
                    promotionCanidate => member.tag === promotionCanidate.tag
                )
            ) {
                member.eligibleForPromotion = true;
            } else if (
                new Date().getUTCDay >= 5 &&
                demotions.find(
                    demotionCanidate => member.tag === demotionCanidate.tag
                )
            ) {
                if (
                    probations.find(
                        probationCanidate =>
                            member.tag === probationCanidate.tag
                    )
                ) {
                    member.onProbation = true;
                } else {
                    member.dangerOfDemotion = true;
                }
            }

            /* prettier-ignore */
            member.winRatio = ((100 * member.wins) / member.battles).toFixed(2) || null;
            /* prettier-ignore */
            member.warParticipationRatio = ((100 * member.wars) / wars).toFixed(2) || null;
            /* prettier-ignore */
            member.donationRatio =((100 * member.donations) / member.donationsreceived).toFixed(2) || null;

            return member;
        });
    })
    .then(members =>
        fs.writeJSON(
            './src/assets/templates/raw/members.json',
            { members },
            {
                spaces: 4
            }
        )
    )
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        client.end();
    });

/* prettier-ignore */
const warDateSelect = 'war_participants.wardate >= (SELECT MAX(entrydate) FROM members) - interval \'30\' day';
/* prettier-ignore */
const dateSelect =
    'members._id = to_char((SELECT MAX(entrydate) FROM members), \'YYYY-MM-DD\') || members.tag AND ' +
    '(war_participants.wardate IS NULL OR ' + warDateSelect + ') '

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

    const demotion_values = [MIN_DONATIONS, MIN_WARS, MAX_MISSED_WARS];
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
            '((SELECT COUNT(tag) FROM members mems WHERE mems.tag = members.tag) < $1) OR ' + //new
            '(members.donations >= $2) OR ' + //elder donations
            'SUM(war_participants.battlesplayed) >= $3'; //elder wars
    const probation_values = [WEEKS_NEW, ELDER_DONATIONS, ELDER_WARS];
    return client
        .query(probation_query, probation_values)
        .then(result => result.rows);
}
