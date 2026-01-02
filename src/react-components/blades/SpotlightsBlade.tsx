import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import bibleReadingImage from '../../images/bible.jpg';
import beliefImage from '../../images/belief_pic.jpg';
import signUpImage from '../../images/scenery.jpg';
import galleryImage from '../../images/culled.jpg';
import { Section } from './components/Section.tsx';
import { config } from '../../config.ts';
import { scrollToSectionHandler } from '../../helpers/scrollToSection.ts';

const AboutUsSection: FC = () => {
	const title = 'About us.';
	const description = (
		<p>
			This camp was born out of the vision to build, grow, and equip our young
			people to take their faith seriously.
			<br />
			<br />
			We want to engage our teens in wrestling with the questions that they may
			have and face.
			<br />
			Our aim is to equip them with the resources and knowledge to make a
			defense to anyone who asks for the reason for the hope that is in them (1
			Peter 3 v15).
		</p>
	);

	return (
		<Section
			id='whats-camp-about'
			imageSrc={beliefImage}
			title={title}
			description={description}
		/>
	);
};

const WhatWeBelieveSection: FC = () => {
	const statementOfFaithLink = 'https://www.nae.org/statement-of-faith/';
	const title = 'What we believe.';
	const description = (
		<p>
			It’s no secret that many of our teens leave home, go out into the world,
			and walk away from their faith.
			<br />
			<br />
			Our desire is to grow them to be dedicated disciples of Christ, teaching
			them to obey all that Christ has commanded us (Matthew 28 v20).
			<br />
			We thoroughly believe that this work can only be done by the Holy Spirit
			working within them.
		</p>
	);
	const linkText = 'statement of faith';

	return (
		<Section
			id='what-we-believe'
			imageSrc={bibleReadingImage}
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
	const { phase, campersSignUpForm } = config;
	const signUpEnabled = phase === 'upcoming';

	const link = signUpEnabled ? campersSignUpForm : undefined;

	const title = 'Sign up.';
	const description = link ? (
		<p>Keen to be a part of our upcoming camp? Scroll down for more info!</p>
	) : (
		<p>
			Keep an eye out for our next camp's details and sign-up link here soon...
		</p>
	);

	const secondaryLinkText = 'More Info';

	return (
		<Section
			id='sign-up'
			imageSrc={signUpImage}
			title={title}
			description={description}
		>
			{signUpEnabled && (
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
	const description = <p>Check out pictures from last camp.</p>;
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
		<AboutUsSection />
		<WhatWeBelieveSection />
		<SignUpSection />
		<GallerySection />
	</section>
);

export const SpotlightsBlade = observer(SpotlightsBladeInternal);
