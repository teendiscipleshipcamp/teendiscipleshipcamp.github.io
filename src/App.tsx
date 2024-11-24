import { Header } from './react-components/Header.tsx';
import { ContactBlade } from './react-components/blades/ContactBlade.tsx';
import { GalleryBlade } from './react-components/blades/GalleryBlade.tsx';
import { Footer } from './react-components/Footer.tsx';
import { SupportBlade } from './react-components/blades/SupportBlade.tsx';
import { SpotlightsBlade } from './react-components/blades/SpotlightsBlade.tsx';
import { MainBanner } from './react-components/MainBanner.tsx';
import { Menu } from './react-components/Menu.tsx';
import { FC } from 'react';
import React from 'react';
import { LeadOrHelpBlade } from './react-components/blades/LeadOrHelpBlade.tsx';
import campfire from './logo/campfire.svg';
import GlyphCampfire from './glyphs/GlyphCampfire.tsx';

const App: FC = () => (
	<html>
		<head>
			<title>Teen Discipleship Camp</title>
			<meta charSet='utf-8' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1, user-scalable=no'
			/>
			<link rel='stylesheet' href='assets/css/main.css' />
			<noscript>
				<link rel='stylesheet' href='assets/css/noscript.css' />
			</noscript>
		</head>
		<div className='menu-wrapper'>
			<div>Logo

			<a href='index.html' className='logo'>
				<img height='40px' width='40px' src={campfire} id="logo"/>
			</a>
			<GlyphCampfire fill='white'  />

			</div>
			<div>
				<button className='fa fa-bars'/>
			</div>
		</div>
		<body className='is-preload'>
			<div id='wrapper'>
				{/* <Header />
				<Menu /> */}
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
