import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { config } from "../config.ts";

const HeadInternal: FC = () => (
    <head>
        <meta charSet="utf-8" />
		<link rel="icon" href="%PUBLIC_URL%/campfire.ico" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="description" content="Teen Discipleship Camp Website" />
		<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
		<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>{config.siteTitle}</title>
    </head>
);

export const Head = observer(HeadInternal);
