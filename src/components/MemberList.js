import React from 'react'
import { capitalizeFirstLetter, checkDonations } from '../utilities/basic'
import { getDirectionIndicator, getMembers } from '../redux/selectors'
import { connect } from 'react-redux'

const MemberList = ({ members, getDirectionIndicator }) => (
    <section>
        <ul>
            <li className="pointer">All Members</li>
            <li className="pointer">Promotions</li>
            <li className="pointer">Probation</li>
            <li className="pointer">Demotions</li>
        </ul>

        <table className="clanMembers">
            <thead className="clanMembers__header">
                <tr>
                    <th className="pointer align-left">{getDirectionIndicator("rank")}</th>
                    <th className="pointer align-right">{getDirectionIndicator("role")}</th>
                    <th className="pointer align-left">{getDirectionIndicator("name")}</th>
                    <th className="pointer align-right">{getDirectionIndicator("donations")}</th>
                    <th className="pointer align-right">{getDirectionIndicator("wars")}</th>
                    <th className="pointer align-right">{getDirectionIndicator("missed")}</th>
                </tr>
            </thead>
            {members.map((member, index) => (
                <tr key={index} className={"clanMembers__" + (member.eligibleForPromotion ? "promotion" : member.onProbation ? "probation" : member.dangerOfDemotion ? "demotion" : "row")}>
                    <td className="align-left"> #{member.clanRank} ({member.trophies})</td>
                    <td className="align-right">{capitalizeFirstLetter(member.role)}</td>
                    <td className="pointer align-left"> {member.name}</td>
                    <td className="align-right">{checkDonations(member)}</td>
                    <td className="align-right"> {member.warBattles}/10</td>
                    <td className="align-right"> {member.missedWarBattles}</td>
                </tr>
            ))}
        </table>
    </section>
)

export default connect(state => ({
    members: getMembers(state.members, state.filter, state.order, state.dir),
    getDirectionIndicator: order => getDirectionIndicator(state.order, state.dir, order)
}))(MemberList)