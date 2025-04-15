import { observer } from 'mobx-react-lite';
import React, { PropsWithChildren } from 'react';
import { FC, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

interface Props {
	animation: 'fade-in-section' | 'scale-in-section';
	className?: string;
}

const AnimationSectionInternal: FC<PropsWithChildren<Props>> = ({
	animation,
	className,
	children,
}) => {
	const [isVisible, setVisible] = useState(false);
	const domRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setVisible(entry.isIntersecting));
		});
		if (domRef.current) {
			observer.observe(domRef.current);
		}
	}, []);

	return (
		<div
			className={cn(animation, className, {
				'is-visible': isVisible,
			})}
			ref={domRef}
		>
			{children}
		</div>
	);
};

export const AnimationSection = observer(AnimationSectionInternal);
