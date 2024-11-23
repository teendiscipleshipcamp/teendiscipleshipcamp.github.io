import { observer } from "mobx-react-lite";
import React, { FC } from "react";

const SpotlightsBladeInternal: FC = () => (
	<section class='spotlights'>
		<section id='what-we-believe'>
			<a href='generic.html' class='image'>
				<img src='/public/pic08.jpg' alt='' data-position='center center' />
				<img src='./public/pic08.jpg' alt='' data-position='center center' />
				<img src='../public/pic08.jpg' alt='' data-position='center center' />
			</a>
			<div class='content'>
				<div class='inner'>
					<header class='major'>
						<h3>What we believe.</h3>
					</header>
					<p>
						It’s no secret that many of our teens leave home, enter the world,
						and walk away from their faith. We want to engage our teens in
						wrestling with questions they may have and face. This camp has been
						born out of our vision to build, grow, and equip our young people to
						take their faith seriously.
					</p>
					<ul class='actions'>
						<li>
							<a href='generic.html' class='button'>
								statement of faith
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
		<section id='sign-up'>
			<a href='generic.html' class='image'>
				<img src='images/pic09.jpg' alt='' data-position='top center' />
			</a>
			<div class='content'>
				<div class='inner'>
					<header class='major'>
						<h3>Sign up.</h3>
					</header>
					<p>
						Keen to be a part of our upcoming camp? Sign up below, or contact us
						for more info!
					</p>
					<ul class='actions'>
						<li>
							<a href='generic.html' class='button'>
								Sign up
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</section>
);

export const SpotlightsBlade = observer(SpotlightsBladeInternal);
