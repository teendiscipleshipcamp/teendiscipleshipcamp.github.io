import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { BladeHeader } from '../bladeparts/BladeHeader';
import { config } from '../../config';

const GalleryBladeInternal: FC = () => (
	<section id='gallery'>
		<div className='inner'>
			<BladeHeader content='Gallery.' />
			<p>Check out pictures from camp.</p>
			<ul className='actions'>
				<li>
					<a
						href={config.galleryDriveUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='button next'
					>
						Get Started
					</a>
				</li>
			</ul>
		</div>
	</section>
);

export const GalleryBlade = observer(GalleryBladeInternal);
