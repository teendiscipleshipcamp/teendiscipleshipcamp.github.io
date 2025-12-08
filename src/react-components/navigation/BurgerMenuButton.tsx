import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import Glyph from '../../glyphs/Glyph.tsx';

interface Props {
	toggleMenu: () => void;
}

const BurgerMenuButtonInternal: FC<Props> = ({ toggleMenu }) => (
	<button id='menu-bars-wrapper' onClick={toggleMenu}>
		<span id='menu-bars-text'>MENU</span>
		<Glyph fill='white' type={'menu'} />
	</button>
);

export const BurgerMenuButton = observer(BurgerMenuButtonInternal);
