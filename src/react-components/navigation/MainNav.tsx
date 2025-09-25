import { observer } from 'mobx-react-lite';
import React, { FC, useCallback, useState } from 'react';
import { MenuButton } from './MenuButton.tsx';
import { Logo } from './Logo.tsx';
import Glyph from '../../glyphs/Glyph.tsx';
import cn from 'classnames';

const updatedMenuItems = [
	{ href: '#banner', label: 'Home' },
	{ href: '#whats-camp-about', label: 'About Us' },
	{ href: '#what-we-believe', label: 'Our Beliefs' },
	{ href: '#sign-up', label: 'Sign Up' },
	{ href: '#gallery', label: 'Gallery' },
	{ href: '#support', label: 'Support Us' },
	{ href: '#contact', label: 'Contact Us' },
];

const MenuInternal: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen((isOpen) => !isOpen);

	const scrollToSection = useCallback(
		(id: string) => {
			const element = document.getElementById(id);
			if (element) {
				window.scrollTo({
					top: element.offsetTop - 100,
					behavior: 'smooth',
				});
				setIsOpen(false);
			}
		},
		[setIsOpen]
	);

	return (
		<nav>
			<div className={`menu-wrapper`}>
				<div className='menu-items'>
					<Logo />
					<MenuButton toggleMenu={toggleMenu} />
				</div>
			</div>
			{
				<div
					className={cn('overlay', 'blur-in-section', { 'is-visible': isOpen })}
				>
					<div className='menu-links'>
						<div>
							<button id='menu-bars-wrapper-close' onClick={toggleMenu}>
								<Glyph fill='white' type={'menu-close'} />
							</button>
						</div>
						{updatedMenuItems.map((item) => (
							<div key={item.href}>
								<a
									href={item.href}
									onClick={(e) => {
										e.preventDefault();
										scrollToSection(item.href.substring(1));
									}}
								>
									{item.label}
								</a>
							</div>
						))}
					</div>
				</div>
			}
		</nav>
	);
};

export const Menu = observer(MenuInternal);
