import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { MenuItem } from './MainNav.tsx';

interface Props {
	menuItems: MenuItem[];
	scrollToSection: (id: string) => void;
}

const DesktopMenuInternal: FC<Props> = ({ menuItems, scrollToSection }) => (
	<div className='desktop-menu-items'>
		{menuItems.map((item) => (
			<a
				key={item.href}
				href={item.href}
				onClick={(e) => {
					e.preventDefault();
					scrollToSection(item.href.substring(1));
				}}
			>
				{item.label}
			</a>
		))}
	</div>
);

export const DesktopMenu = observer(DesktopMenuInternal);
