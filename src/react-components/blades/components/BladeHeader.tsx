import React, { FC } from 'react';

interface Props {
	content: string;
}

export const BladeHeader: FC<Props> = ({ content }) => (
	<header className='major'>
		<h2>{content}</h2>
	</header>
);
