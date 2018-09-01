import React from 'react'

class ClanDescription extends React.Component {
    render(){
        return(
            <section className="half description">
                <div className="description__reqs">
                    <h2>Clan Requirements</h2>
                    <p><strong>Member:</strong> Donate at least {this.props.clan.minDonations} cards and participate in {this.props.clan.minWarBattles}/10 war battles.</p>
                    <p><strong>Elder:</strong> Have at least {this.props.clan.minTrophies} trophies and donate more than {this.props.clan.elderDonations} cards. Must participate in at least {this.props.clan.elderWarBattles}/10 war battles. Kicking members and invitations to those below basic member requirements requires permission.</p>
                </div>
            </section>
        )
    }
}
export default ClanDescription