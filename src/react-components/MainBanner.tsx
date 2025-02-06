import { observer } from 'mobx-react-lite';
import React from 'react';
import { FC } from 'react';
import { config } from '../config.ts';

const MainBannerInternal: FC = () => {
	const signUpEnabled = config.phase === 'upcoming';

	return (
		<section id='banner' className='major'>
			<div className='inner'>
				<header className='major'>
					<h1>{config.siteTitle}</h1>
				</header>
				<p>Equipping young people to thrive in an ever changing world.</p>
				<div className='content'>
					<ul className='actions'>
						<li>
							{signUpEnabled && 
								(<a href='#sign-up' className='button next scrolly'>
									Sign up
								</a>)
							}
						</li>
					</ul>
				</div>
			</div>
		</section>
	);	
};

export const MainBanner = observer(MainBannerInternal);
