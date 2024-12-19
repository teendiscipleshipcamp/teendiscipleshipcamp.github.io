import { ContactBlade } from './react-components/blades/ContactBlade.tsx';
import { Footer } from './react-components/Footer.tsx';
import { SupportBlade } from './react-components/blades/SupportBlade.tsx';
import { SpotlightsBlade } from './react-components/blades/SpotlightsBlade.tsx';
import { MainBanner } from './react-components/MainBanner.tsx';
import { FC } from 'react';
import React from 'react';
import { LeadOrHelpBlade } from './react-components/blades/LeadOrHelpBlade.tsx';
import { MainNav } from './react-components/navigation/MainNav.tsx';
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
					<SupportBlade />
				</div>
				<ContactBlade />
				<Footer />
			</div>
		</body>
	</html>
);

export default App;
