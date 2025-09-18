import { FC } from 'react';
import { BladeHeader } from './components/BladeHeader.tsx';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { AnimationSection } from './components/AnimationSection.tsx';

const SupportBladeInternal: FC = () => (
	<section id='support'>
		<AnimationSection animation='fade-in-section' className='inner'>
			<BladeHeader content='Support a camper.' />
			<p>
				Our heart is to ensure young people are able to come to camp so we keep
				costs to a minimum.
				<br />
				If you would like to sponsor someone to come to camp, or would love to
				support some other way please get in touch below!
			</p>
		</AnimationSection>
	</section>
);

export const SupportBlade = observer(SupportBladeInternal);
