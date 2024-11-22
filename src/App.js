import { Header } from './react-components/Header.js';
import { ContactBlade } from './react-components/blades/ContactBlade.tsx';
import { GalleryBlade } from './react-components/blades/GalleryBlade.js';
import { Footer } from './react-components/Footer.js';
import { SupportBlade } from './react-components/blades/SupportBlade.js';
import { SpotlightsBlade } from './react-components/blades/SpotlightsBlade.js';
import { MainBanner } from './react-components/MainBanner.js';
import { Menu } from './react-components/Menu.js';

const App = () => (
	<html>
		<head>
			<title>Teen Discipleship Camp</title>
			<meta charset='utf-8' />
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1, user-scalable=no'
			/>
			<link rel='stylesheet' href='assets/css/main.css' />
			<noscript>
				<link rel='stylesheet' href='assets/css/noscript.css' />
			</noscript>
		</head>
		<body class='is-preload'>
			<div id='wrapper'>
				<Header />
				<Menu />
				<MainBanner />
				<div id='main' role='main'>
					<SpotlightsBlade />
					<GalleryBlade />
					<SupportBlade />
				</div>
				<ContactBlade />
				<Footer />
			</div>

			{/* <script src='assets/js/jquery.min.js'></script>
			<script src='assets/js/jquery.scrolly.min.js'></script>
			<script src='assets/js/jquery.scrollex.min.js'></script>
			<script src='assets/js/browser.min.js'></script> */}
			{/* <script src='assets/js/breakpoints.min.js'></script> */}
			{/* <script src='assets/js/util.js'></script>
			<script src='assets/js/main.js'></script> */}
		</body>
	</html>
);

export default App;
