import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import Glyph from '../../glyphs/Glyph.tsx';
import cn from 'classnames';
import { MenuItem } from './MainNav.tsx';

interface Props {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	menuItems: MenuItem[];
	scrollToSection: (id: string) => void;
}

const MobileMenuInternal: FC<Props> = ({
	isOpen,
	setIsOpen,
	menuItems,
	scrollToSection,
}) => (
	<div className={cn('overlay', 'blur-in-section', { 'is-visible': isOpen })}>
		<div className='menu-links'>
			<div>
				<button id='menu-bars-wrapper-close' onClick={() => setIsOpen(false)}>
					<Glyph fill='white' type={'menu-close'} />
				</button>
			</div>
			{menuItems.map((item) => (
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
);

export const MobileMenu = observer(MobileMenuInternal);
