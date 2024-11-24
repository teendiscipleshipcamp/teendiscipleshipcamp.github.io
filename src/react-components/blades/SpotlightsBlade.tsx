import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import bladeImage from '../../images/pic08.jpg';

const WhatWeBelieveSection: FC = () => {
	const statementOfFaithLink = 'https://www.nae.org/statement-of-faith/';

	return (
		<section id='what-we-believe'>
			<div className='image'>
				<img src={bladeImage} alt='' data-position='top center' />
			</div>
			<div className='content'>
				<div className='inner'>
					<header className='major'>
						<h3>What we believe.</h3>
					</header>
					<p>
						It’s no secret that many of our teens leave home, enter the world,
						and walk away from their faith. We want to engage our teens in
						wrestling with questions they may have and face. This camp has been
						born out of our vision to build, grow, and equip our young people to
						take their faith seriously.
					</p>
					<ul className='actions'>
						<li>
						<a href={statementOfFaithLink} target="_blank" className='button' rel="noreferrer">
										statement of faith
									</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

const SignUpSection: FC = () => {
	const camperSignUpLink = 'https://forms.gle/2qhEDvm1a9MwwcZTA';

	return (
		<section id='sign-up'>
		<div className='image'>
			<img src={bladeImage} alt='' data-position='top center' />
		</div>
		<div className='content'>
			<div className='inner'>
				<header className='major'>
					<h3>Sign up.</h3>
				</header>
				<p>
					Keen to be a part of our upcoming camp? Sign up below, or contact us
					for more info!
				</p>
				<ul className='actions'>
					<li>
						<a href={camperSignUpLink} target="_blank" className='button' rel="noreferrer">
							Sign up
						</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
	);
};

const SpotlightsBladeInternal: FC = () => (
	<section className='spotlights'>
		<WhatWeBelieveSection />
		<SignUpSection />
	</section>
);

export const SpotlightsBlade = observer(SpotlightsBladeInternal);
