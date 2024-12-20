import { observer } from "mobx-react-lite";
import React, { FC } from "react";

const HeaderInternal: FC = () => (
	<header id='header' className='alt'>
		<a href='index.html' className='logo'>
			<strong>
				<img height='80px' width='420px' src='src/logo/campfire.svg' alt='Campfire logo' />
			</strong>
		</a>
		<nav>
			<a href='#menu'>Menu</a>
		</nav>
	</header>
);

export const Header = observer(HeaderInternal);
