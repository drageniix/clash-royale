const api = require('./retrieveAPI');
let client;

module.exports = async importedClient => {
    client = importedClient;
    await preserveSundays();
    await updateClan();
    await updateWarLog();
};

async function preserveSundays() {
    return client.query(
        'DELETE FROM members WHERE extract(isodow from entrydate) != 7'
    );
}

async function updateClan() {
    const data = await api.getClanData();
    const clan_query =
        'INSERT INTO clan(entrydate, clanname, description, clanscore, clanwartrophies) ' +
        'VALUES($1, $2, $3, $4, $5)';
    const clan_values = [
        data.date,
        data.name,
        data.description,
        data.clanScore,
        data.clanWarTrophies
    ];
    await client.query(clan_query, clan_values);

    return Promise.all(
        data.memberList.map(member => {
            const member_query =
                'INSERT INTO members(_id, tag, entrydate, playername, trophies, clanrole, clanrank, donations, donationsreceived) ' +
                'VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)';
            const member_values = [
                data.date + member.tag,
                member.tag,
                data.date,
                member.name,
                member.trophies,
                member.role,
                member.clanRank,
                member.donations,
                member.donationsReceived
            ];
            return client.query(member_query, member_values);
        })
    );
}

async function updateWarLog() {
    const lastWar = await client.query('SELECT max(wardate) from wars');
    const data = await api.getWarLog(lastWar.rows[0].max);
    return Promise.all(
        data.map(async war => {
            const war_query =
                'INSERT INTO wars(place, wardate, participants, battlesplayed, wins, crowns, trophychange) ' +
                'VALUES($1, $2, $3, $4, $5, $6, $7)';
            const war_values = [
                war.place,
                war.date,
                war.result.clan.participants,
                war.result.clan.battlesPlayed,
                war.result.clan.wins,
                war.result.clan.crowns,
                war.result.trophyChange
            ];
            await client.query(war_query, war_values);

            return Promise.all(
                war.participants_info.map(particpant => {
                    const war_participants_query =
                        'INSERT INTO war_participants(tag, cardsearned, battlesplayed, wins, collectiondaybattlesplayed, wardate) ' +
                        'VALUES($1, $2, $3, $4, $5, $6)';
                    const war_participants_values = [
                        particpant.tag,
                        particpant.cardsEarned,
                        particpant.battlesPlayed,
                        particpant.wins,
                        particpant.collectionDayBattlesPlayed,
                        war.date
                    ];
                    return client.query(
                        war_participants_query,
                        war_participants_values
                    );
                })
            );
        })
    );
}
