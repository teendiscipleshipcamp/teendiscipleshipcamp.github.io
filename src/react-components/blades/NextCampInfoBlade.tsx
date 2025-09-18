import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { config } from '../../config.ts';
import { BladeHeader } from './components/BladeHeader.tsx';
import { AnimationSection } from './components/AnimationSection.tsx';
import { scrollToSectionHandler } from '../../helpers/scrollToSection.ts';

const NextCampInfoInternal: FC = () => {
	const { featureFlags } = config;
	const showSection = featureFlags.showNextCampInfo;

	if (!showSection) {
		return null;
	}

	const title = 'Next Camp Key Info.';
	const description = 'Here’s what you need to know for next camp...';

	return (
		<section id='next-camp'>
			<AnimationSection animation='fade-in-section' className='inner'>
				<BladeHeader content={title} />
				<p>{description}</p>
				<p>
					<b>What:</b>&emsp;Our next TDC! We'll be tackling more apologetics
					this camp with...
					<br />
					<b>Speaker:</b>&emsp;Nic Blackie (
					<a
						className='link'
						href='https://www.thinkingmatters.org.nz/people/nic-blackie/'
						target='_blank'
						rel='noreferrer'
					>
						Thinking Matters
					</a>
					)
					<br />
					<b>Who:</b>&emsp;Teens 15 - 19
					<br />
					<b>When:</b>&emsp;28th - 30th November
					<br />
					<b>Where:</b>&emsp;Campbell Park Christian Camp
					<br />
					<b>Cost:</b>&emsp;$60*
				</p>
				*We don't want anyone to miss out due to cost, so if it's an issue
				<a
					className='link'
					href='#contact'
					onClick={(e) => scrollToSectionHandler(e, '#contact')}
				>
					please reach out.
				</a>
			</AnimationSection>
		</section>
	);
};

export const NextCampInfoBlade = observer(NextCampInfoInternal);
