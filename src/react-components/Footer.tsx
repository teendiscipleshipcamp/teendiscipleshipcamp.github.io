import { observer } from "mobx-react-lite";
import React, { FC } from "react";

const FooterInternal: FC = () => (
	<footer id='footer'>
		<div class='inner'>
			<ul class='icons'>
				<li>
					<a href='#' class='icon brands alt fa-twitter'>
						<span class='label'>Twitter</span>
					</a>
				</li>
				<li>
					<a href='#' class='icon brands alt fa-facebook-f'>
						<span class='label'>Facebook</span>
					</a>
				</li>
				<li>
					<a href='#' class='icon brands alt fa-instagram'>
						<span class='label'>Instagram</span>
					</a>
				</li>
				<li>
					<a href='#' class='icon brands alt fa-linkedin-in'>
						<span class='label'>LinkedIn</span>
					</a>
				</li>
				<li>
					<span class='label'>v1.0.0</span>
				</li>
			</ul>
		</div>
	</footer>
);

export const Footer = observer(FooterInternal);

