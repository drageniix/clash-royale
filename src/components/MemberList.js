import React from 'react'
import { capitalizeFirstLetter, checkDonations } from '../utilities/basic'
import { getDirectionIndicator, getMembers } from '../redux/selectors'
import { setOrder, setFilter, setQuery } from '../redux/actions'
import { connect } from 'react-redux'

const MemberList = ({ members, getDirectionIndicator, dispatch }) => (
    <section>
        <ul>
            <li className="pointer" onClick={() => dispatch(setFilter.byNone)}>All Members</li>
            <li className="pointer" onClick={() => dispatch(setFilter.byPromotion)}>Promotions</li>
            <li className="pointer" onClick={() => dispatch(setFilter.byProbation)}>Probation</li>
            <li className="pointer" onClick={() => dispatch(setFilter.byDemotion)}>Demotions</li>
        </ul>

        <table className="clanMembers">
            <thead className="clanMembers__header">
                <tr>
                    <th className="pointer align-left" onClick={() => dispatch(setOrder.byRank)}>{getDirectionIndicator("rank")}</th>
                    <th className="pointer align-right" onClick={() => dispatch(setOrder.byRole)}>{getDirectionIndicator("role")}</th>
                    <th className="pointer align-left" onClick={() => dispatch(setOrder.byName)}>{getDirectionIndicator("name")}</th>
                    <th className="pointer align-right" onClick={() => dispatch(setOrder.byDonations)}>{getDirectionIndicator("donations")}</th>
                    <th className="pointer align-right" onClick={() => dispatch(setOrder.byWarBattles)}>{getDirectionIndicator("wars")}</th>
                    <th className="pointer align-right" onClick={() => dispatch(setOrder.byMissed)}>{getDirectionIndicator("missed")}</th>
                </tr>
            </thead>
            {members.map((member, index) => (
                <tr key={index} className={"clanMembers__" + (member.eligibleForPromotion ? "promotion" : member.onProbation ? "probation" : member.dangerOfDemotion ? "demotion" : "row")}>
                    <td className="align-left"> #{member.clanRank} ({member.trophies})</td>
                    <td className="align-right">{capitalizeFirstLetter(member.role)}</td>
                    <td className="pointer align-left" 
                        onClick={() => dispatch(setQuery(member.tag))}>
                        {member.name}
                    </td>
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