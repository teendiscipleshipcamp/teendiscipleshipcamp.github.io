import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import Glyph from "../glyphs/Glyph.tsx";

const MainNavInternal: FC = () => (
    <div className='menu-wrapper'>
        <div className='menu-items'>
            <a href='index.html' id='logo-wrapper'>
                <Glyph fill='white' type='campfire'/>
                <div id='logo-text'>TDC</div>
            </a>
            <button id="menu-bars-wrapper">
                <span id='menu-bars-text'>MENU</span>
                <Glyph fill='white' type='menu'/>
            </button>
        </div>
    </div>
);

export const MainNav = observer(MainNavInternal);
