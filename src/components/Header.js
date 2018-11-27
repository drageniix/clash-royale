import React from 'react';

export const Header = () => (
    <header className="header">
        <div className="header__content">
            <div className="header__brand">
                <img className="header__brand--logo" src="./favicon.png" />
                <h1 className="header__brand--title">3 Dark Towers</h1>
            </div>
            <div className="header__links">
                <a href="">Discord</a>
                <a href="https://royaleapi.com/clan/PGVRPVG">All Stats</a>
            </div>
        </div>
    </header>
);
export default Header;
