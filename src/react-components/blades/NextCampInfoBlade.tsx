import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { config } from '../../config.ts';
import { BladeHeader } from './components/BladeHeader.tsx';
import { AnimationSection } from './components/AnimationSection.tsx';
import { scrollToSectionHandler } from '../../helpers/scrollToSection.ts';

const NextCampInfoInternal: FC = () => {
	const { cost, phase, campersSignUpForm } = config;
	const showSection = phase === 'upcoming';

	if (!showSection) {
		return null;
	}

	const costString = cost > 0 ? `$${cost}` : 'Free!';

	const title = 'Next Camp Key Info.';
	const description = 'Here’s what you need to know for next camp...';

	const subtitle = (
		<>
			<p style={{ textAlign: 'center' }}>
				Welcome back to another epic camp! <br />
				This camp we will continue to wrestle with the deeper questions of life.
				<br />
				Expect plenty of fun activities, morning boot camps (optional), great
				yarns, and plenty of good food!
			</p>
			<p>{description}</p>
		</>
	);

	const link = showSection ? campersSignUpForm : undefined;
	const linkText = 'Sign up';

	return (
		<section id='next-camp'>
			<AnimationSection animation='fade-in-section' className='inner'>
				<BladeHeader content={title} />
				{subtitle}
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
					<b>Cost:</b>&emsp;{costString}*
				</p>
				*We don't want anyone to miss out due to cost, so if it's an issue
				<a
					className='link'
					href='#contact'
					onClick={(e) => scrollToSectionHandler(e, '#contact')}
				>
					please reach out.
				</a>
				{link && (
					<>
						<br />
						<br />
						<a
							href={link}
							target={'_blank'}
							className='button'
							rel='noreferrer'
						>
							{linkText}
						</a>
						<br />
					</>
				)}
			</AnimationSection>
		</section>
	);
};

export const NextCampInfoBlade = observer(NextCampInfoInternal);
