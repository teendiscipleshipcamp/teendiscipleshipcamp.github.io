import { BladeHeader } from './bladeparts/BladeHeader.tsx';

export const GalleryBlade = () => (
	<section id='gallery'>
		<div class='inner'>
			<BladeHeader content='Gallery' />
			<p>Check out pictures from camp.</p>
			<ul class='actions'>
				<li>
					<a href='landing.html' class='button next'>
						Get Started
					</a>
				</li>
			</ul>
		</div>
	</section>
);
