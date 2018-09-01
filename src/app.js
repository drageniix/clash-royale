import React from "react"
import ReactDOM from "react-dom"

import data from './generated/data/data.json'
import './styles/index.scss'

importAll(require.context('./generated', true))
function importAll(r){
    r.keys().map(r)
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class App extends React.Component {
    state = {members: data.clan.members}

    render(){ 
        return (
            <div>
                <table className="clanMembers">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Trophies</th>
                            <th>Role</th>
                            <th>Donations</th>
                            <th>Wars /10</th>
                            <th>Missed</th>
                        </tr>
                    </thead>
                    {this.state.members.map((member, index) => (
                        <tr key={index} className={
                            member.eligibleForPromotion ? "clanMembers__promotion" :
                            member.dangerOfDemotion ? "clanMembers__demotion" :
                            "clanMembers__row" }>
                            <td> #{index + 1}</td>
                            <td> {member.name}</td>
                            <td> {member.trophies}</td>
                            <td> {capitalizeFirstLetter(member.role)}</td>
                            <td> {member.donations} ({((member.donations / member.donationsReceived) * 100).toFixed(1)}%)</td>
                            <td> {member.warBattles}</td>
                            <td> {member.missedWarBattles}</td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("content"))