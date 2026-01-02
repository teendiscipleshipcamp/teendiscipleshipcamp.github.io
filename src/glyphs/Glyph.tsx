import React, { FC } from 'react';
import GlyphCampfire from './GlyphCampfire.tsx';
import GlyphMenu from './GlyphMenu.tsx';
import GlyphMenuClose from './GlyphMenuClose.tsx';
import GlyphExternalLink from './GlyphExternalLink.tsx';
import GlyphModalClose from './GlyphModalClose.tsx';

type GlyphType =
	| 'campfire'
	| 'menu'
	| 'menu-close'
	| 'modal-close'
	| 'external-link';

export interface GlyphProps {
	stroke?: string;
	fill?: string;
	heightInPx?: number;
	widthInPx?: number;
}
interface Props extends GlyphProps {
	type: GlyphType;
}

const glyphMap: Record<GlyphType, FC<Partial<Props>>> = {
	campfire: GlyphCampfire,
	menu: GlyphMenu,
	'menu-close': GlyphMenuClose,
	'modal-close': GlyphModalClose,
	'external-link': GlyphExternalLink,
};

const Glyph: FC<Props> = ({
	type,
	fill = 'currentColor',
	stroke = 'none',
	heightInPx = 40,
	widthInPx = 40,
}) => {
	const GlyphComponent = glyphMap[type];
	return (
		<GlyphComponent
			stroke={stroke}
			fill={fill}
			heightInPx={heightInPx}
			widthInPx={widthInPx}
		/>
	);
};

export default Glyph;
