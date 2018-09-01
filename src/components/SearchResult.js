import React from 'react'

const SearchResult = ({member}) => (
    <section className="searchResult">
        <table className="searchResult__table">
            <tr>
                <td>Name</td>
                <td>{member.name} ({member.tag})</td>
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
                <td>War Battles (Last 100)</td>
                <td>{member.warBattles}</td>
            </tr>
            <tr>
                <td>Missed War Battles</td>
                <td>{member.missedWarBattles}</td>
            </tr>
        </table>
    </section>
)

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default SearchResult
