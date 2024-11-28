import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { MenuButton } from "./MenuButton.tsx";
import { Logo } from "./Logo.tsx";

const MainNavInternal: FC = () => (
    <div className='menu-wrapper'>
        <div className='menu-items'>
            <Logo />
            <MenuButton />
        </div>
    </div>
);

export const MainNav = observer(MainNavInternal);
