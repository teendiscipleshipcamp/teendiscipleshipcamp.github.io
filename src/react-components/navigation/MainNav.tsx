import { observer } from "mobx-react-lite";
import React, { FC, useEffect, useState } from "react";
import { MenuButton } from "./MenuButton.tsx";
import { Logo } from "./Logo.tsx";

const MainNavInternal: FC = () => {
    // const [scrollDirection, setScrollDirection] = useState<string | null>(null);
    // const [lastScrollY, setLastScrollY] = useState(0);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentScrollY = window.scrollY;

    //         if (currentScrollY > lastScrollY && currentScrollY > 0) {
    //             setScrollDirection("down");
    //         } else if (currentScrollY < lastScrollY && currentScrollY > 0) {
    //             setScrollDirection("up");
    //         } else {
    //             setScrollDirection(null);
    //         }

    //         setLastScrollY(currentScrollY);
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, [lastScrollY]);

    return (
        <div className={`menu-wrapper`}>
        {/* <div className={`menu-wrapper ${scrollDirection === "up" ? "scrolled-up" : scrollDirection === "down" ? "scrolled-down" : ""}`}> */}
            <div className='menu-items'>
                <Logo />
                <MenuButton />
            </div>
        </div>
    );
};

export const MainNav = observer(MainNavInternal);
