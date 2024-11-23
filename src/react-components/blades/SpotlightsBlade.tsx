import { observer } from "mobx-react-lite";
import React, { FC } from "react";

const WhatWeBelieveSection: FC = () => {
	const statementOfFaithLink = 'https://www.nae.org/statement-of-faith/';

	return (
		<div className='inner'>
			<section id='what-we-believe'>
				<a href='generic.html' className='image'>
					<img src='/public/pic08.jpg' alt='' data-position='center center' />
					<img src='./public/pic08.jpg' alt='' data-position='center center' />
					<img src='../public/pic08.jpg' alt='' data-position='center center' />
				</a>
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
		</div>
	);
};

const SignUpSection: FC = () => {
	const camperSignUpLink = 'https://forms.gle/2qhEDvm1a9MwwcZTA';

	return (
		<section id='sign-up'>
		<a href='generic.html' className='image'>
			<img src='images/pic09.jpg' alt='' data-position='top center' />
		</a>
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

const LeadOrHelpSection: FC = () => {
	const leaderSignUpLink = 'https://forms.gle/SXnuwRDE39CieC4G7';

	return (
		<div className='inner'>
			<section id='lead'>
				<a href='generic.html' className='image'>
					<img src='images/pic09.jpg' alt='' data-position='top center' />
				</a>
				<div className='content'>
					<div className='inner'>
						<header className='major'>
							<h3>Lead.</h3>
						</header>
						<p>
							Keen to lead at one of our camps, or use your gifts to help? We're always looking for more people to join our team!
							Reach out to us below if you have any questions or would like to get involved, or sign up to lead at our next camp below.
						</p>
						<ul className='actions'>
							<li>
								<a href={leaderSignUpLink} target='_blank' className='button' rel="noreferrer">
									Sign up
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
};

const SpotlightsBladeInternal: FC = () => (
	<section className='spotlights'>
		<WhatWeBelieveSection />
		<SignUpSection />
		<LeadOrHelpSection/>
	</section>
);

export const SpotlightsBlade = observer(SpotlightsBladeInternal);
