import { FC } from 'react';
import { BladeHeader } from './bladeparts/BladeHeader.tsx';
import React from 'react';
import { observer } from 'mobx-react-lite';

const SupportBladeInternal: FC = () => (
	<section id='support'>
		<div className='inner'>
			<BladeHeader content='Support a camper.' />
			<p>
				As our heart is to ensure young people are able to come to camp, we keep
				costs to a minimum.
				<br />
				If you would like to sponsor someone to come to camp, or would love to
				support some other way please get in touch below!
			</p>
		</div>
	</section>
);

export const SupportBlade = observer(SupportBladeInternal);
