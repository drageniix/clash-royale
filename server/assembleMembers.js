const fs = require('fs-extra');

module.exports = async (members, wars, promotions, probations, demotions) => {
    const assembledMembers = await Promise.all(
        members.map(async member => {
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
            member.winRatio = parseFloat(((100 * member.wins) / (member.missed + member.battles)).toFixed(1)) || 0;
            /* prettier-ignore */
            member.warParticipationRatio = parseFloat(((100 * member.battles) / wars).toFixed(1)) || 0;
            /* prettier-ignore */
            member.donationRatio = parseFloat(((100 * member.donations) / member.donationsreceived).toFixed(1)) || 0;

            // member.warHistory = await getWarHistory(member.tag);

            return member;
        })
    );

    return fs.writeJSON(
        './src/assets/templates/raw/members.json',
        { members: assembledMembers },
        {
            spaces: 4
        }
    );
};
