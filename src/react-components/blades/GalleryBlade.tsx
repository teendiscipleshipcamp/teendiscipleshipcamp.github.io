import { observer } from 'mobx-react-lite';
import { BladeHeader } from './bladeparts/BladeHeader.tsx';
import React, { FC } from 'react';

const GalleryBladeInternal: FC = () => (
	<section id='gallery'>
		<div className='inner'>
			<BladeHeader content='Gallery.' />
			<p>Check out pictures from camp.</p>
			<ul className='actions'>
				<li>
					<a href='landing.html' className='button next'>
						Get Started
					</a>
				</li>
			</ul>
		</div>
	</section>
);

export const GalleryBlade = observer(GalleryBladeInternal);