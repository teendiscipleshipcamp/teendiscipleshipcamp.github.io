import React from "react";
import { FC } from "react";
import { GlyphProps } from "./Glyph";

const GlyphMenuClose: FC<GlyphProps> = ({ fill = '#000000', heightInPx = '40px', widthInPx = '40px' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={widthInPx} height={heightInPx} viewBox="0 0 20 20">
        <line x1="0" y1="0" x2="20" y2="20" stroke={fill} strokeWidth="2" />
        <line x1="20" y1="0" x2="0" y2="20" stroke={fill} strokeWidth="2" />
    </svg>
);

export default GlyphMenuClose;