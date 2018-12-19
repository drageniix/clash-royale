import React from 'react';
import Search from './Search';

export const Header = () => (
    <header className="header">
        <div className="header__content">
            <div className="header__brand">
                <img className="header__brand--logo" src="./favicon.png" />
                <h1 className="header__brand--title">3 Dark Towers</h1>
            </div>
            <Search />
            <div className="header__links">
                <a href="https://link.brawlstars.com/invite/band/en?tag=CJLQ2V&token=stt3a7es">
                    Brawlstars
                </a>
                <a href="https://discord.gg/XvFGctt">Discord</a>
            </div>
        </div>
    </header>
);
export default Header;
