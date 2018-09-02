import moment from 'moment'
import React from 'react'

const Footer = ({ time }) => (
    <footer className="footer">
        <p className="footer__updated">Last updated {moment.unix(time).fromNow()}</p>
        <p className="footer__credits">@meliaesc</p>
    </footer>
)

export default Footer