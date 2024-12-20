import { ContactBlade } from './react-components/Contact/ContactBlade.tsx';
import { Footer } from './react-components/Footer.tsx';
import { SupportBlade } from './react-components/blades/SupportBlade.tsx';
import { SpotlightsBlade } from './react-components/blades/SpotlightsBlade.tsx';
import { MainBanner } from './react-components/MainBanner.tsx';
import { FC } from 'react';
import React from 'react';
import { LeadOrHelpBlade } from './react-components/blades/LeadOrHelpBlade.tsx';
import { Menu } from './react-components/navigation/MainNav.tsx';
import { Head } from './react-components/Head.tsx';

const App: FC = () => (
	<>
		<Head />
		<body className='is-preload'>
			<Menu />
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
	</>
);

export default App;
