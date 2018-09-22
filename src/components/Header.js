import React from 'react'
import { connect } from 'react-redux'
import ChooseWeek from './ChooseWeek';

export const Header = ({ name, discord }) => (
    <header className="header">
        <div className="header__content">
            <div className="header__brand">
                <img className="header__brand--logo" src="./favicon.png" />
                <h1 className="header__brand--title">{name}</h1>
            </div>
            <div className="header__links">
                <ChooseWeek/>
                <a href={discord}>Discord</a>
                <a href="https://royaleapi.com/clan/PGVRPVG">All Stats</a>
            </div>
        </div>
    </header>
)

export default connect(state => ({
    name: state.api.clan.name,
    discord: state.api.discord
}))(Header)
