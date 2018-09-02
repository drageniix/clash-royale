import moment from 'moment'
import React from 'react'

const Footer = ({ time }) => (
    <footer className="footer">
        <div className="footer__links">
            <a href="https://discord.gg/XvFGctt"><div className="icon--discord"></div></a>
        </div>
        <p className="footer__updated">Clan data last updated {moment.unix(time).fromNow()}.</p>
    </footer>
)

export default Footer