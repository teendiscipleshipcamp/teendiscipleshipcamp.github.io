import { observer } from 'mobx-react-lite';
import React, { FC, PropsWithChildren, ReactNode, useState } from 'react';
import { AnimationSection } from './AnimationSection.tsx';
import cn from 'classnames';

interface Props {
	id: string;
	imageSrc?: string;
	title: string;
	description: ReactNode;
}

const SectionInternal: FC<PropsWithChildren<Props>> = ({
	id,
	imageSrc,
	title,
	description,
	children,
}) => {
	const [active, setActive] = useState(false);
	const toggleHover = () => setActive((active) => !active);

	return (
		<section onMouseOver={toggleHover} onMouseOut={toggleHover} id={id}>
			{imageSrc && (
				<div className={cn('image', { active: active })}>
					<img
						src={imageSrc}
						alt=''
						data-position='top center'
						loading='lazy'
					/>
				</div>
			)}
			<div className='content'>
				<AnimationSection animation='fade-in-section' className='inner'>
					<header className='major'>
						<h3>{title}</h3>
					</header>
					{description}
					{children && <ul className='actions'>{children}</ul>}
				</AnimationSection>
			</div>
		</section>
	);
};

export const Section = observer(SectionInternal);
