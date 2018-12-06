const fs = require('fs-extra');

const currentWeek = async (members, wars, promotions, probations, demotions) =>
    Promise.all(
        members.map(member => {
            if (
                promotions.find(
                    promotionCanidate => member.tag === promotionCanidate.tag
                )
            ) {
                member.eligibleForPromotion = true;
            } else if (
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
            member.winRatio = parseFloat(((100 * member.wins) / (parseInt(member.missed) + parseInt(member.battles))).toFixed(1)) || 0;
            /* prettier-ignore */
            member.warParticipationRatio = parseFloat(((100 * member.wars) / wars).toFixed(1)) || 0;
            /* prettier-ignore */
            member.donationRatio = parseFloat(((100 * member.donations) / member.donationsreceived).toFixed(1)) || 0;

            return member;
        })
    ).then(assembledMembers =>
        fs.writeJSON(
            './src/assets/templates/raw/_members.json',
            { members: assembledMembers },
            {
                spaces: 4
            }
        )
    );

const getHistory = async (member, getWarHistory, getClanHistory) => {
    const wars = await getWarHistory(member.tag);
    const clan = await getClanHistory(member.tag);

    const history = {
        normalize: { max: 4, scale: 200 },
        warHistory: {
            wins: [],
            losses: [],
            missed: []
        },
        clanHistory: {
            donations: []
        }
    };

    const weeks = wars
        .map(war => war.week.toISOString())
        .concat(clan.map(clan => clan.week.toISOString()))
        .filter((week, i, arr) => arr.indexOf(week) === i);

    weeks.sort();

    weeks.forEach(week => {
        let foundWar = wars.find(war => war.week.toISOString() === week);
        let foundClan = clan.find(clan => clan.week.toISOString() === week);

        history.warHistory.wins.push({
            x: week,
            y: foundWar ? parseInt(foundWar.wins) : 0
        });
        history.warHistory.losses.push({
            x: week,
            y: foundWar ? parseInt(foundWar.losses) : 0
        });
        history.warHistory.missed.push({
            x: week,
            y: foundWar ? parseInt(foundWar.missed) : 0
        });
        history.clanHistory.donations.push({
            x: week,
            y: foundClan
                ? parseInt(foundClan.donations) / history.normalize.scale
                : 0
        });
    });

    return fs.writeJSON(
        './src/assets/templates/raw/' + member.tag.slice(1) + '.json',
        { history },
        {
            spaces: 4
        }
    );
};

module.exports = async (
    members,
    wars,
    promotions,
    probations,
    demotions,
    getWarHistory,
    getClanHistory
) => {
    await currentWeek(members, wars, promotions, probations, demotions);
    await Promise.all(
        members.map(member => getHistory(member, getWarHistory, getClanHistory))
    );

    return fs.copy('./src/assets/templates/raw', './public/assets/data');
};
