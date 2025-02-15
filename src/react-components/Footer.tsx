import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { config } from "../config.ts";

const DevInfo: FC = () => (
	<section id='dev-info'>
		<span id='label'>{config.version}</span>
	</section>
);

const SocialMediaSection: FC = () => (
	<div className='inner'>
	<ul className='icons'>
		<li>
			<a href='https://twitter.com' className='icon brands alt fa-twitter' target='_blank' rel='noopener noreferrer'>
				<span className='label'>Twitter</span>
			</a>
		</li>
		<li>
			<a href='https://facebook.com' className='icon brands alt fa-facebook-f' target='_blank' rel='noopener noreferrer'>
				<span className='label'>Facebook</span>
			</a>
		</li>
		<li>
			<a href='https://instagram.com' className='icon brands alt fa-instagram' target='_blank' rel='noopener noreferrer'>
				<span className='label'>Instagram</span>
			</a>
		</li>
		<li>
			<a href='https://linkedin.com' className='icon brands alt fa-linkedin-in' target='_blank' rel='noopener noreferrer'>
				<span className='label'>LinkedIn</span>
			</a>
		</li>
	</ul>
</div>
)

const FooterInternal: FC = () => (
	<footer id='footer'>
		{config.featureFlags.socialMedia && (<SocialMediaSection />)}
		<DevInfo />
	</footer>

);

export const Footer = observer(FooterInternal);

