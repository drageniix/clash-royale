import React from 'react'

const Header = ({clan}) => (
    <header className="header">
        <div class="header__content">
            <img src="./favicon.png" />
            <div className="header__text">
                <h1>{clan.name}</h1>
                <p>2+ Years Strong! Come chat with us on <a href="https://discord.gg/XvFGctt">Discord</a>.</p>
            </div>
        </div>
    </header>
)

export default Header
