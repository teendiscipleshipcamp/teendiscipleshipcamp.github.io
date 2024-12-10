import React from "react";
import { FC } from "react";
import { GlyphProps } from "./Glyph";

const GlyphMenu: FC<GlyphProps> = ({ fill = '#000000', heightInPx = '24px', widthInPx = '24px' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={widthInPx} height={heightInPx} viewBox="0 0 24 32" preserveAspectRatio="none">
        <style>
            {`line { stroke-width: 2px; stroke: ${fill}; }`}
        </style>
        <line x1="0" y1="11" x2="24" y2="11" />
        <line x1="0" y1="21" x2="24" y2="21" />
        <line x1="0" y1="16" x2="24" y2="16" />
    </svg>
);

export default GlyphMenu;