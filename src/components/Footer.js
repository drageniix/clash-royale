import moment from 'moment'
import React from 'react'
import { connect } from 'react-redux'
import { isCurrent } from '../redux/selectors';

export const Footer = ({ pastDate, time, discord }) => (
    <footer className="footer">
        <div className="footer__links">
            <a href={discord}><div className="icon--discord"></div></a>
        </div>
        {pastDate ? 
            <p className= "footer__updated">Clan data from {pastDate}</p> :
            <p className="footer__updated">Clan data last updated {time && moment.unix(time).fromNow()}.</p>
        }
        <p className="footer__credits">@meliaesc</p>
    </footer>
)

export default connect(state => ({
    pastDate: isCurrent(state.current, state.api.lastWeeks),
    time: state.api.time,
    discord: state.api.discord
}))(Footer)