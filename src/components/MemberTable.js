import React from 'react'


class MemberTable extends React.Component {
    state = {order : "RANK", dir : true, sortedMembers : this.props.members}

    search = (member, event) => {
        this.props.setSearchResult(member.name)
        window.scrollTo(0, 0)
        event.preventDefault()
    }

    sort = (order) => {
        console.log(this.state)
        const members = this.state.sortedMembers
        const dir = this.state.order === order ? !this.state.dir : true
        switch (order){
            case "RANK":
                members.sort((a, b) => dir ? a.rank - b.rank : b.rank - a.rank)
                break; 
            case "NAME":
                members.sort((a, b) => {
                    const aName = a.name.toLowerCase()
                    const bName = b.name.toLowerCase()
                    if (dir) {
                        return aName <  bName ? -1 : aName > bName ? 1 : 0
                    } else {
                        return aName < bName ? 1 : aName > bName ? -1 : 0
                    }
                })
                break; 
            case "DONATIONS":
                members.sort((a, b) => dir ? b.donations - a.donations : a.donations - b.donations)
                break; 
            case "WARS":
                members.sort((a, b) => dir ? b.warBattles - a.warBattles : a.warBattles - b.warBattles)
                break; 
            case "MISSED":
                members.sort((a, b) => dir ? b.missedWarBattles - a.missedWarBattles : a.missedWarBattles - b.missedWarBattles)
                break; 
            case "ROLE":
                members.sort((a, b) => {
                    const getValue = (role) => {
                        switch(role.toLowerCase()) {
                            case 'leader':
                                return 1
                            case 'coleader':
                                return 2
                            case 'elder':
                                return 3
                            case 'member':
                                return 4
                        }
                    }

                    const aRole = getValue(a.role)
                    const bRole = getValue(b.role)

                    return dir ? aRole - bRole : bRole - aRole
                })
                break; 
        }
        this.setState({sortedMembers: members, order, dir})
    }

    getDirectionString = order => capitalizeFirstLetter(order) + (this.state.order === order ? (this.state.dir ? " ▼" : " ▲") : "")

    render(){
        return  (
            <section>
                <table className="clanMembers">
                    <thead className="clanMembers__header">
                        <tr>
                            <th onClick={this.sort.bind(this, "RANK")} 
                                className="pointer align-left">{this.getDirectionString("RANK")}</th>
                            <th onClick={this.sort.bind(this, "ROLE")}
                                className="pointer align-right">{this.getDirectionString("ROLE")}</th>
                            <th onClick={this.sort.bind(this, "NAME")}
                                className="pointer align-left">{this.getDirectionString("NAME")}</th>
                            <th onClick={this.sort.bind(this, "DONATIONS")}
                                className="pointer align-right">{this.getDirectionString("DONATIONS")}</th>
                            <th onClick={this.sort.bind(this, "WARS")}
                                className="pointer align-right">{this.getDirectionString("WARS")}</th>
                            <th onClick={this.sort.bind(this, "MISSED")} 
                                className="pointer align-right">{this.getDirectionString("MISSED")}</th>
                        </tr>
                    </thead>
                    {this.state.sortedMembers.map((member, index) => (
                        <tr key={index} className={"clanMembers__" + (member.eligibleForPromotion ? "promotion " : member.onProbation ? "probation " : member.dangerOfDemotion ? "demotion " : "row")}>
                            <td className="align-left"> #{member.rank} ({member.trophies})</td>
                            <td className="align-right">{capitalizeFirstLetter(member.role)}</td>
                            <td className="pointer align-left" onClick={this.search.bind(this, member)}> {member.name}</td>
                            <td className="align-right">{checkDonations(member)}</td>
                            <td className="align-right"> {member.warBattles}/10</td>
                            <td className="align-right"> {member.missedWarBattles}</td>
                        </tr>
                    ))}
                </table>
            </section>
        )
    }
}

function checkDonations(member){
    if (member.donations === 0 && member.donationsReceived === 0){
        return "none"
    } else if(member.donationsReceived == 0) {
        return `${ member.donations } - 0` 
    } else if(member.donations == 0) {
        return `0 - ${member.donationsReceived }` 
    } else {
        return `${ member.donations } (${((member.donations / member.donationsReceived) * 100).toFixed(1)}%)`
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default MemberTable