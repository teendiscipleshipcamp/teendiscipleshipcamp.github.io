import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import beliefImage from '../../images/belief_pic.jpg';
import signUpImage from '../../images/scenery.jpg';
import galleryImage from '../../images/culled.jpg';
import { Section } from "../bladeparts/Section.tsx";
import { config } from "../../config.ts";

const WhatWeBelieveSection: FC = () => {
	const statementOfFaithLink = 'https://www.nae.org/statement-of-faith/';
	const title = 'What we believe.';
	const description = "It’s no secret that many teens leave home, enter the world, and walk away from their faith. We want to engage teens in wrestling with questions they have and face.";
	const linkText = 'statement of faith';

	return (
		<Section
			id='what-we-believe'
			imageSrc={beliefImage}
			title={title}
			description={description}
			link={statementOfFaithLink}
			linkText={linkText}
		/>
	);
};

const SignUpSection: FC = () => {
	const title = 'Sign up.';
	const description = 'Keen to be a part of our upcoming camp? Sign up below, or contact us for more info!';
	const linkText = 'Sign up';

	const signUpEnabled = config.phase === 'upcoming';

	return (
		<Section
			id='sign-up'
			imageSrc={signUpImage}
			title={title}
			description={description}
			link={signUpEnabled ? config.campersSignUpForm : undefined}
			linkText={linkText}
		/>
	);
};

const GallerySection: FC = () => {
	const title = 'Gallery.';
	const description = 'Check out pictures from camp.';
	const linkText = 'See Them';

	return (
		<Section
			id='gallery'
			imageSrc={galleryImage}
			title={title}
			description={description}
			link={config.galleryDriveUrl}
			linkText={linkText}
		/>
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
