import { observer } from 'mobx-react-lite';
import { BladeHeader } from './components/BladeHeader.tsx';
import React, { FC } from 'react';
import { AnimationSection } from './components/AnimationSection.tsx';
import { config } from '../../config.ts';

const LeadOrHelpInternal: FC = () => {
	const { phase, leadersSignUpForm } = config;
	const signUpEnabled = phase === 'upcoming';
	const showSignUpLink = signUpEnabled && leadersSignUpForm;

	return (
		<section id='lead-or-help'>
			<AnimationSection animation='fade-in-section' className='inner'>
				<BladeHeader content='Lead.' />
				{showSignUpLink ? (
					<>
						<p>
							Keen to lead at one of our camps, or use your gifts to help? Reach
							out to us below if you have any questions or would like to get
							involved, or sign up below to lead at our next camp.
						</p>
						<ul className='actions'>
							<li>
								<a
									href={leadersSignUpForm}
									target='_blank'
									className='button'
									rel='noreferrer'
								>
									Leader sign up
								</a>
							</li>
						</ul>
					</>
				) : (
					<p>
						Keen to lead at one of our camps, or use your gifts to help? Reach
						out to us below if you have any questions or would like to get
						involved.
					</p>
				)}
			</AnimationSection>
		</section>
	);
};

export const LeadOrHelpBlade = observer(LeadOrHelpInternal);
