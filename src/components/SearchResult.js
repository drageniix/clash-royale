import React from 'react'

const SearchResult = ({member}) => (
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
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getMemberColor(member){
    if(member.eligibleForPromotion){
        return "promotion"
    } else if (member.onProbation){
        return "probation"
    } else if (member.dangerOfDemotion) {
        return "demotion"
    } else if (member.role === 'member' || member.role === 'new') {
        return "member"
    } else if (member.role === 'elder') {
        return "elder"
    } else if (member.role === 'coleader') {
        return "coleader"
    } else if (member.role === 'leader') {
        return "leader"
    }
}
export default SearchResult
