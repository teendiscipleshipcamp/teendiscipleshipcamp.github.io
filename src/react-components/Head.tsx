import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { config } from "../config";

const HeadInternal: FC = () => (
    <head>
        <title>{config.siteTitle}</title>
        <meta charSet='utf-8' />
        <meta
            name='viewport'
            content='width=device-width, initial-scale=1, user-scalable=no'
        />
    </head>
);

export const Head = observer(HeadInternal);
