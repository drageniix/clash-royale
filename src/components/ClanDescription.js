import React from 'react'
import { connect } from 'react-redux'

const ClanDescription = ({admin}) => (
    <section className="description">
        <div className="description__reqs">
            <h2>Clan Requirements</h2>
            <p><strong>Member:</strong> Donate at least {admin.minDonations} cards weekly and participate in {admin.minWarBattles}/10 war battles, missing a maximum of 1 war day battle when you participated in collection day.</p>
            <p><strong>Elder:</strong> Have at least {admin.minTrophies} trophies and donate more than {admin.elderDonations} cards. Must participate in at least {admin.elderWarBattles}/10 wars. Kicking members and sending invitations to those below basic member requirements requires permission.</p>
        </div>
    </section>
)

export default connect(state => ({
    admin: state.admin
}))(ClanDescription)