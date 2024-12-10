import React, { FC } from "react";
import GlyphCampfire from './GlyphCampfire.tsx';
import GlyphMenu from "./GlyphMenu.tsx";
import GlyphMenuClose from "./GlyphMenuClose.tsx";

type GlyphType = 'campfire' | 'menu' | 'menu-close';

export interface GlyphProps {
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
};

const Glyph: FC<Props> = ({ type, fill = '#000000', heightInPx = 40, widthInPx = 40 }) => {
    const GlyphComponent = glyphMap[type];
    return <GlyphComponent fill={fill} heightInPx={heightInPx} widthInPx={widthInPx} />;
};

export default Glyph;