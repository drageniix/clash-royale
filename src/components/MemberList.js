import React from 'react'
import FilterOptions from './FilterOptions';
import SortOptions from './SortOptions';
import { capitalizeFirstLetter, checkDonations } from '../utilities/basic'
import { getMembers } from '../redux/selectors'
import { setQuery } from '../redux/actions'
import { connect } from 'react-redux'

export class MemberList extends React.Component {
    onClick = memberTag => e => {
        window.scroll({ top: 200, left: 0, behavior: 'smooth' }) //can't use in tests
        this.props.onClick(memberTag)
    }

    render() {
        return (
            <section className="filter">
                <FilterOptions />
                <table className="clanMembers">
                    <SortOptions />
                    {this.props.members.map((member, index) => (
                        <tr key={index} className={"clanMembers__" + (member.eligibleForPromotion ? "promotion" : member.onProbation ? "probation" : member.dangerOfDemotion ? "demotion" : "row")}>
                            <td className="align-left"> #{member.clanRank} ({member.trophies})</td>
                            <td className="align-right">{capitalizeFirstLetter(member.role)}</td>
                            <td className="pointer align-left member-link" onClick={this.onClick(member.tag)}>
                                {member.name}
                            </td>
                            <td className="align-right">{checkDonations(member)}</td>
                            <td className="align-right">{member.warBattles}{member.missedWarBattles ? (" (" + member.missedWarBattles + "M)") : ""}</td>
                        </tr>
                    ))}
                </table>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    members: getMembers(state.api.members, state.filters)
})

const mapDispatchToProps = dispatch => ({
    onClick: query => dispatch(setQuery(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(MemberList)