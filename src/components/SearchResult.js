import React from 'react'
import { capitalizeFirstLetter, getMemberColor } from '../utilities/basic'
import { getSearchResult } from '../redux/selectors'
import { connect } from 'react-redux'

const SearchResult = ({ member }) => {
    if (!member) {
        return <section />
    } else {
        return (
            <section className="searchResult" id={getMemberColor(member)}>
                <table className="searchResult__table">
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
                        <td>{capitalizeFirstLetter(member.role)}</td>
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
                </table>
            </section>
        )
    }
}

export default connect(state => ({
    member: getSearchResult(state.query, state.members)
}))(SearchResult)
