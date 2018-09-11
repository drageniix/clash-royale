import React from 'react'
import { connect } from 'react-redux'

export const Header = ({ name, discord }) => (
    <header className="header">
        <div class="header__content">
            <img src="./favicon.png" />
            <div className="header__text">
                <h1>{name}</h1>
                <p>2+ Years Strong! Come chat with us on <a href={discord}>Discord</a>.</p>
            </div>
        </div>
    </header>
)

export default connect(state => ({
    name: state.api.clan.name,
    discord: state.api.discord
}))(Header)
