import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import { MenuButton } from "./MenuButton.tsx";
import { Logo } from "./Logo.tsx";
import Glyph from "../../glyphs/Glyph.tsx";

const MainNavInternal: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((isOpen) => !isOpen);

    return (
        <><div className={`menu-wrapper`}>
            <div className='menu-items'>
                <Logo />
                <MenuButton toggleMenu={toggleMenu}/>
            </div>
        </div><>
            {isOpen && (
                <div className={`overlay ${isOpen ? 'active' : ''}`}>
                    <div className='menu-links'>
                        <div>
                            <button id="menu-bars-wrapper-close" onClick={toggleMenu}>
                                <Glyph fill='white' type={'menu-close'} />
                            </button>
                        </div>
                        <div>
                            <a href='#banner' onClick={toggleMenu}>Home</a>
                        </div>
                        <div>
                            <a href='#what-we-believe' onClick={toggleMenu}>What we believe</a>
                        </div>
                        <div>
                            <a href='#sign-up' onClick={toggleMenu}>Sign up</a>
                        </div>
                        <div>
                            <a href='#gallery' onClick={toggleMenu}>Gallery</a>
                        </div>
                        <div>
                            <a href='#support' onClick={toggleMenu}>Support us</a>
                        </div>
                        <div>
                            <a href='#contact' onClick={toggleMenu}>Contact us</a>
                        </div>
                    </div>
                </div>)}
            </></>
        
    );
};

export const MainNav = observer(MainNavInternal);
