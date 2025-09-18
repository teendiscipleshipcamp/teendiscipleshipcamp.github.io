import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import beliefImage from '../../images/belief_pic.jpg';
import signUpImage from '../../images/scenery.jpg';
import galleryImage from '../../images/culled.jpg';
import { Section } from './components/Section.tsx';
import { config } from '../../config.ts';
import { scrollToSectionHandler } from '../../helpers/scrollToSection.ts';

const WhatWeBelieveSection: FC = () => {
	const statementOfFaithLink = 'https://www.nae.org/statement-of-faith/';
	const title = 'What we believe.';
	const description =
		'It’s no secret that many teens leave home, enter the world, and walk away from their faith. We want to engage teens in wrestling with questions they have and face.';
	const linkText = 'statement of faith';

	return (
		<Section
			id='what-we-believe'
			imageSrc={beliefImage}
			title={title}
			description={description}
		>
			<li>
				<a
					href={statementOfFaithLink}
					target={'_blank'}
					className='button'
					rel='noreferrer'
				>
					{linkText}
				</a>
			</li>
		</Section>
	);
};

const SignUpSection: FC = () => {
	const { phase, campersSignUpForm, featureFlags } = config;
	const signUpEnabled = phase === 'upcoming';

	const link = signUpEnabled ? campersSignUpForm : undefined;
	const showNextCampInfo = featureFlags.showNextCampInfo;

	const title = 'Sign up.';
	const linkText = 'Sign up';
	const description = link
		? 'Keen to be a part of our upcoming camp? Sign up below, or contact us for more info!'
		: "Keep an eye out for our next camp's details and sign-up link here soon...";

	const secondaryLinkText = 'Next Camp Info';

	return (
		<Section
			id='sign-up'
			imageSrc={signUpImage}
			title={title}
			description={description}
		>
			{link && (
				<li>
					<a href={link} target={'_blank'} className='button' rel='noreferrer'>
						{linkText}
					</a>
				</li>
			)}
			{showNextCampInfo && (
				<li>
					<a
						href={'#next-camp'}
						onClick={(e) => scrollToSectionHandler(e, '#next-camp')}
						target={'_self'}
						className='button'
						rel='noreferrer'
					>
						{secondaryLinkText}
					</a>
				</li>
			)}
		</Section>
	);
};

const GallerySection: FC = () => {
	const title = 'Gallery.';
	const description = 'Check out pictures from last camp.';
	const linkText = 'See Them';

	return (
		<Section
			id='gallery'
			imageSrc={galleryImage}
			title={title}
			description={description}
		>
			<li>
				<a
					href={config.galleryDriveUrl}
					target={'_blank'}
					className='button'
					rel='noreferrer'
				>
					{linkText}
				</a>
			</li>
		</Section>
	);
};

const SpotlightsBladeInternal: FC = () => (
	<section className='spotlights'>
		<WhatWeBelieveSection />
		<SignUpSection />
		<GallerySection />
	</section>
);

export const SpotlightsBlade = observer(SpotlightsBladeInternal);
