import { ContactBlade } from './react-components/blades/ContactBlade.tsx';
import { GalleryBlade } from './react-components/blades/GalleryBlade.tsx';
import { Footer } from './react-components/Footer.tsx';
import { SupportBlade } from './react-components/blades/SupportBlade.tsx';
import { SpotlightsBlade } from './react-components/blades/SpotlightsBlade.tsx';
import { MainBanner } from './react-components/MainBanner.tsx';
import { FC } from 'react';
import React from 'react';
import { LeadOrHelpBlade } from './react-components/blades/LeadOrHelpBlade.tsx';
import { MainNav } from './react-components/MainNav.tsx';
import { Head } from './react-components/Head.tsx';

const App: FC = () => (
	<html>
		<Head />
		<MainNav />
		<body className='is-preload'>
			<div id='wrapper'>
				<MainBanner />
				<div id='main' role='main'>
					<SpotlightsBlade />
					<LeadOrHelpBlade />
					<GalleryBlade />
					<SupportBlade />
				</div>
				<ContactBlade />
				<Footer />
			</div>
			<script src='assets/js/jquery.min.js'></script>
			<script src='assets/js/jquery.scrolly.min.js'></script>
			<script src='assets/js/jquery.scrollex.min.js'></script>
			<script src='assets/js/browser.min.js'></script>
			<script src='assets/js/breakpoints.min.js'></script>
			<script src='assets/js/util.js'></script>
			<script src='assets/js/main.js'></script>
		</body>
	</html>
);

export default App;
