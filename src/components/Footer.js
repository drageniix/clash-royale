import moment from 'moment'
import React from 'react'
import { connect } from 'react-redux'

export const Footer = ({ time, discord }) => (
    <footer className="footer">
        <div className="footer__links">
            <a href={discord}><div className="icon--discord"></div></a>
        </div>
        <p className="footer__updated">Clan data last updated {time && moment.unix(time).fromNow()}.</p>
        <p className="footer__credits">@meliaesc</p>
    </footer>
)

export default connect(state => ({
    time : state.time,
    discord: state.discord
}))(Footer)