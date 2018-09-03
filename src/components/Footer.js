import moment from 'moment'
import React from 'react'

const Footer = ({ time }) => (
    <footer className="footer">
        <div className="footer__links">
            <a href="https://discord.gg/XvFGctt"><div className="icon--discord"></div></a>
        </div>
        <p className="footer__updated">Clan data last updated {time && moment.unix(time).fromNow()}.</p>
        <p className="footer__credits">@meliaesc</p>
    </footer>
)

export default Footer