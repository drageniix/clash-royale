import React from 'react'

const Demotions = ({ members}) => (
    <section>
        <table className="clanMembers">
            <thead className="clanMembers__header">
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Donations</th>
                    <th>Wars /10</th>
                    <th>Missed</th>
                </tr>
            </thead>
            {members.map((member, index) => (
                <tr key={index} className={(member.eligibleForPromotion ? "promotion " : member.dangerOfDemotion ? "demotion " : "") + "clanMembers__row"}>
                    <td> #{member.rank}</td>
                    <td > {member.name}</td>
                    <td> {member.donations} ({((member.donations / member.donationsReceived) * 100).toFixed(1)}%)</td>
                    <td> {member.warBattles}</td>
                    <td> {member.missedWarBattles}</td>
                </tr>
            ))}
        </table>
    </section>
)

export default Demotions