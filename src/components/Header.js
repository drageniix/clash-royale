import React from 'react'

const Header = ({clan}) => (
    <header className="header">
        <div class="header__content">
            <img src="./favicon.png" /><h1>{clan.name}</h1>
            <p>2+ Years Strong! Please do not miss any war day battles. There are currenly no Coleader positions available.</p>
        </div>
    </header>
)

export default Header
