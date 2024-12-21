import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import { AnimationSection } from "./AnimationSection.tsx";
import cn from "classnames";

interface Props {
	id: string;
	imageSrc: string;
	title: string;
	description: string;
	link: string;
	linkText: string;
}

const SectionInternal: FC<Props> = ({ id, imageSrc, title, description, link, linkText }) => {
	const [active, setActive] = useState(false);
	const toggleHover = () => setActive((active) => !active);

	return (
		<section onMouseOver={toggleHover} onMouseOut={toggleHover} id={id}>
			<div className={cn('image', { 'active': active })}>
				<img src={imageSrc} alt='' data-position='top center' loading="lazy"/>
			</div>
			<div className='content'>
				<AnimationSection animation='fade-in-section' className='inner'>
					<header className='major'>
						<h3>{title}</h3>
					</header>
					<p>{description}</p>
					<ul className='actions'>
						<li>
							<a  href={link} target="_blank" className='button' rel="noreferrer">
								{linkText}
							</a>
						</li>
					</ul>
				</AnimationSection>
			</div>
		</section>
	);
};

export const Section = observer(SectionInternal);