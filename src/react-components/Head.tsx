import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { config } from '../config.ts';

const HeadInternal: FC = () => (
	<head>
		<meta charSet='utf-8' />
		<link rel='icon' type='image/x-icon' href='/campfire.ico' />
		<meta name='viewport' content='width=device-width, initial-scale=1' />
		<meta name='description' content='Teen Discipleship Camp Website' />
		<link rel='apple-touch-icon' href='%PUBLIC_URL%/logo192.png' />
		<link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
		<title>{config.siteTitle}</title>

		{/* Preload important images */}
		<link
			rel='preload'
			href='/images/belief_pic.jpg'
			as='image'
			fetchPriority='high'
		/>
		<link
			rel='preload'
			href='/images/bonfire.jpg'
			as='image'
			fetchPriority='high'
		/>
		<link
			rel='preload'
			href='/images/culled.jpg'
			as='image'
			fetchPriority='high'
		/>
		<link
			rel='preload'
			href='/images/making-fire.jpg'
			as='image'
			fetchPriority='high'
		/>
		<link
			rel='preload'
			href='/images/scenery.jpg'
			as='image'
			fetchPriority='high'
		/>
	</head>
);

export const Head = observer(HeadInternal);
