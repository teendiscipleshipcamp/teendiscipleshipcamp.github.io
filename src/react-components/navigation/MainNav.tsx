import { observer } from 'mobx-react-lite';
import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { BurgerMenuButton } from './BurgerMenuButton.tsx';
import { Logo } from './Logo.tsx';
import { MobileMenu } from './MobileMenu.tsx';
import { useWindowWidth } from '@react-hook/window-size';
import { DesktopMenu } from './DesktopMenu.tsx';

export interface MenuItem {
	href: string;
	label: string;
}

const menuItems: MenuItem[] = [
	{ href: '#banner', label: 'Home' },
	{ href: '#whats-camp-about', label: 'About Us' },
	{ href: '#what-we-believe', label: 'Our Beliefs' },
	{ href: '#sign-up', label: 'Sign Up' },
	{ href: '#gallery', label: 'Gallery' },
	{ href: '#support', label: 'Support Us' },
	{ href: '#contact', label: 'Contact Us' },
];

const MenuWrapper: FC<PropsWithChildren> = ({ children }) => (
	<div className={'menu-wrapper'}>
		<div className='menu-items'>
			<Logo />
			{children}
		</div>
	</div>
);

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

	const width = useWindowWidth();
	const isMobile = width < 908;
	return (
		<nav>
			{isMobile ? (
				<>
					<MenuWrapper>
						<BurgerMenuButton toggleMenu={toggleMenu} />
					</MenuWrapper>
					<MobileMenu
						menuItems={menuItems}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						scrollToSection={scrollToSection}
					/>
				</>
			) : (
				<MenuWrapper>
					<DesktopMenu
						menuItems={menuItems}
						scrollToSection={scrollToSection}
					/>
				</MenuWrapper>
			)}
		</nav>
	);
};

export const Menu = observer(MenuInternal);
