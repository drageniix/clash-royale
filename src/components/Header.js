import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div class="header__content">
                    <img src="./favicon.png" /><h1>{this.props.clan.name}</h1>
                    <p>2+ Years Strong! Please do not miss any war day battles. There are currenly no coleader positions open.</p>
                </div>
            </header>
        )
    }
}

export default Header
