import { observer } from 'mobx-react-lite';
import React from 'react';
import { FC } from 'react';

const MainBannerInternal: FC = () => (
	<section id='banner' class='major'>
		<div class='inner'>
			<header class='major'>
				<h1>Teen Discipleship Camp</h1>
			</header>
			<p>Equipping young people to thrive in an ever changing world.</p>
			<div class='content'>
				<ul class='actions'>
					<li>
						<a href='#sign-up' class='button next scrolly'>
							Sign up
						</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
);

export const MainBanner = observer(MainBannerInternal);
