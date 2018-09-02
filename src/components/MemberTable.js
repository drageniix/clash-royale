import React from 'react'


class MemberTable extends React.Component {
    search = (member, event) => {
        this.props.setSearchResult(member.name)
        window.scrollTo(0, 0)
        event.preventDefault()
    }

    render(){
        return  (
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
                    {this.props.members.map((member, index) => (
                        <tr onClick={this.search.bind(this, member)} key={index} 
                            className={(member.eligibleForPromotion ? "promotion " : member.onProbation ? "probation " : member.dangerOfDemotion ? "demotion " : "") + "clanMembers__row"}>
                            <td> #{member.rank}</td>
                            <td> {member.name}</td>
                            <td>{checkDonations(member)}</td>
                            <td> {member.warBattles}</td>
                            <td> {member.missedWarBattles}</td>
                        </tr>
                    ))}
                </table>
            </section>
        )
    }
}

function checkDonations(member){
    if (member.donations === 0 & member.donationsReceived === 0){
        return "none"
    } else {
        return `${ member.donations } (${((member.donations / member.donationsReceived) * 100).toFixed(1)}%)`
    }
}

export default MemberTable