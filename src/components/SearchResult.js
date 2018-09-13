import React from 'react'
import { capitalizeRole, getMemberColor } from '../utilities/members'
import { getSearchResult } from '../redux/selectors'
import { connect } from 'react-redux'

export const SearchResult = ({ member }) => {
    if (!member) {
        return <section />
    } else {
        return (
            <section className="searchResult" id={getMemberColor(member)}>
                <table className="searchResult__table">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{member.name}</td>
                        </tr>
                        <tr>
                            <td>Tag</td>
                            <td>{member.tag}</td>
                        </tr>
                        <tr>
                            <td>Trophies</td>
                            <td>{member.trophies}</td>
                        </tr>
                        <tr>
                            <td>Role</td>
                            <td>{capitalizeRole(member)}</td>
                        </tr>
                        <tr>
                            <td>Donations</td>
                            <td>{member.donations}</td>
                        </tr>
                        <tr>
                            <td>Donations Received</td>
                            <td>{member.donationsReceived}</td>
                        </tr>
                        <tr>
                            <td>War Battles (Last 10)</td>
                            <td>{member.wins}W - {member.warBattles - member.wins}L</td>
                        </tr>
                        <tr>
                            <td>Missed War Battles</td>
                            <td>{member.missedWarBattles}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        )
    }
}

export default connect(state => ({
    member: getSearchResult(state.query, state.api.members)
}))(SearchResult)
