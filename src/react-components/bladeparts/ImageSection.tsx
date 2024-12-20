import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { AnimationSection } from "./AnimationSection.tsx";

interface ImageSectionProps {
	imageSrc: string;
	title: string;
	description: string;
	link: string;
	linkText: string;
}

const ImageSectionInternal: FC<ImageSectionProps> = ({ imageSrc, title, description, link, linkText }) => (
	<section>
		<div className='image'>
			<img src={imageSrc} alt='' data-position='top center' />
		</div>
		<div className='content'>
			<AnimationSection animation='fade-in-section' className='inner'>
				<header className='major'>
					<h3>{title}</h3>
				</header>
				<p>{description}</p>
				<ul className='actions'>
					<li>
						<a href={link} target="_blank" className='button' rel="noreferrer">
							{linkText}
						</a>
					</li>
				</ul>
			</AnimationSection>
		</div>
	</section>
);

export const ImageSection = observer(ImageSectionInternal);