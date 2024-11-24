import { observer } from "mobx-react-lite";
import React, { FC } from "react";

const FooterInternal: FC = () => (
	<footer id='footer'>
		<div className='inner'>
			<ul className='icons'>
				<li>
					<a href='#' className='icon brands alt fa-twitter'>
						<span className='label'>Twitter</span>
					</a>
				</li>
				<li>
					<a href='#' className='icon brands alt fa-facebook-f'>
						<span className='label'>Facebook</span>
					</a>
				</li>
				<li>
					<a href='#' className='icon brands alt fa-instagram'>
						<span className='label'>Instagram</span>
					</a>
				</li>
				<li>
					<a href='#' className='icon brands alt fa-linkedin-in'>
						<span className='label'>LinkedIn</span>
					</a>
				</li>
				<li>
					<span className='label'>v1.1</span>
				</li>
			</ul>
		</div>
	</footer>
);

export const Footer = observer(FooterInternal);

