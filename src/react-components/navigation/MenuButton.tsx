import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import Glyph from "../../glyphs/Glyph.tsx";

const MenuButtonInternal: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.error("toggle menu");
        setIsOpen((isOpen) => !isOpen);
    }

    // const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault();

    //     toggleMenu();
    //     // Show menu options

    // }


    return (       
        <>
        <button id="menu-bars-wrapper" onClick={toggleMenu}>
            <span id='menu-bars-text'>MENU</span>
            <Glyph fill='white' type={'menu'} />
        </button>
        {isOpen && (
            <div id="overlay">

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
            </div>)
        }
        </>
    );
}

export const MenuButton = observer(MenuButtonInternal);
