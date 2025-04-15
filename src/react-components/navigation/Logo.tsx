import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import Glyph from '../../glyphs/Glyph.tsx';

const LogoInternal: FC = () => (
	<a href='index.html' id='logo-wrapper'>
		<Glyph fill='white' type='campfire' />
		<div id='logo-text'>TDC</div>
	</a>
);

export const Logo = observer(LogoInternal);
