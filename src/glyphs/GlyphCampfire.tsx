import React from "react";
import { FC } from "react";

interface Props {
    fill?: string;
    heightInPx?: number;
    widthInPx?: number;
}

const GlyphCampfire: FC<Props> = ({ fill = '#000000', heightInPx = '40px', widthInPx = '40px' }) => {
return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="200.000000pt" height="200.000000pt" viewBox="0 0 200.000000 200.000000"
        preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
            fill={fill} stroke="none">
            <path d="M967 1628 c-28 -38 -519 -742 -625 -896 l-71 -104 -3 69 c-3 65 -4
            68 -28 68 l-25 0 0 -130 c0 -123 1 -130 20 -133 16 -2 39 23 105 118 l85 121
            3 -112 c1 -62 8 -119 14 -126 8 -10 51 -13 173 -13 139 0 165 2 176 16 8 10
            57 101 109 203 53 102 100 184 105 181 6 -3 48 -88 94 -190 45 -102 88 -191
            93 -197 15 -19 361 -18 376 0 6 7 13 64 14 126 l3 114 69 -99 c85 -122 105
            -144 127 -144 25 0 29 20 29 145 0 90 -3 115 -16 126 -31 25 -49 -1 -52 -76
            l-3 -68 -36 54 c-66 97 -605 873 -645 927 -21 28 -45 52 -53 52 -8 0 -25 -15
            -38 -32z m307 -437 l246 -354 0 -139 0 -139 -145 3 -146 3 -101 223 c-86 188
            -104 222 -122 222 -18 0 -42 -38 -137 -222 l-116 -223 -131 -3 -132 -3 0 138
            0 138 257 368 c206 296 259 365 269 355 6 -7 123 -172 258 -367z"/>
        </g>
    </svg>
);
}

export default GlyphCampfire;