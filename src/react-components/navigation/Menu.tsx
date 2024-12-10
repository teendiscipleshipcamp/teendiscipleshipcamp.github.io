import { observer } from "mobx-react-lite";
import React, { FC } from "react";

const MenuInternal: FC = () => (
	<nav id='menu'>
		<ul className='links'>
			<li>
				<a href='#banner'>Home</a>
			</li>
			<li>
				<a href='#what-we-believe'>What we believe</a>
			</li>
			<li>
				<a href='#sign-up'>Sign up</a>
			</li>
			<li>
				<a href='#support'>Gallery</a>
			</li>
			<li>
				<a href='#support'>Support us</a>
			</li>
			<li>
				<a href='#contact'>Contact us</a>
			</li>
		</ul>
	</nav>
);

export const Menu = observer(MenuInternal);
