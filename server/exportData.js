const db = require('./firebase');

module.exports = async (
    members,
    totalWars,
    promotions,
    probations,
    demotions,
    getWarHistory,
    getClanHistory
) => {
    const processedMembers = await Promise.all(
        members.map(async member => {
            const history = await getHistory(
                member,
                getWarHistory,
                getClanHistory
            );

            const ratios = getRatios(member, totalWars);
            getRole(member, promotions, demotions, probations, ratios);

            return db
                .doc(member.tag.slice(1))
                .set({
                    ...history,
                    ratios
                })
                .then(() => member);
        })
    );

    return db.doc('members').set({
        members: processedMembers
    });
};

function getRole(member, promotions, demotions, probations, ratios) {
    member.warRatio = ratios[2].percentage + ratios[0].percentage;

    if (
        promotions.find(
            promotionCanidate => member.tag === promotionCanidate.tag
        )
    ) {
        member.eligibleForPromotion = true;
    } else if (
        demotions.find(demotionCanidate => member.tag === demotionCanidate.tag)
    ) {
        if (
            probations.find(
                probationCanidate => member.tag === probationCanidate.tag
            )
        ) {
            member.onProbation = true;
        } else {
            member.dangerOfDemotion = true;
        }
    }
}

function getRatios(member, totalWars) {
    const ratios = [
        {
            percentage:
                parseFloat(
                    (
                        (100 * member.wins) /
                        (parseInt(member.missed) + parseInt(member.battles))
                    ).toFixed(1)
                ) || 0,
            name: 'Wins',
            details: [
                { title: 'Wins', value: member.wins || 0 },
                { title: 'Losses', value: member.losses || 0 },
                { title: 'Missed', value: member.missed || 0 }
            ]
        },
        {
            percentage:
                parseFloat(
                    (
                        (100 * member.donations) /
                        member.donationsreceived
                    ).toFixed(1)
                ) || 0,
            name: 'Donations',
            details: [
                { title: 'Given', value: member.donations },
                {
                    title: 'Received',
                    value: member.donationsreceived
                }
            ]
        },
        {
            percentage:
                parseFloat(((100 * member.wars) / totalWars).toFixed(1)) || 0,
            name: 'Wars',
            details: [{ title: 'Month', value: member.wars }]
        }
    ];

    return ratios;
}

async function getHistory(member, getWarHistory, getClanHistory) {
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

    const wars = await getWarHistory(member.tag);
    const clan = await getClanHistory(member.tag);

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

    return history;
}
