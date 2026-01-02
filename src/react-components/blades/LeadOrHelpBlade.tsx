import { observer } from 'mobx-react-lite';
import { BladeHeader } from './components/BladeHeader.tsx';
import { FC } from 'react';
import { AnimationSection } from './components/AnimationSection.tsx';

const LeadOrHelpInternal: FC = () => (
	<section id='lead-or-help'>
		<AnimationSection animation='fade-in-section' className='inner'>
			<BladeHeader content='Lead.' />
			<p>
				Keen to lead at one of our camps, or use your gifts to help? Reach out
				to us below if you have any questions or would like to get involved.
			</p>
		</AnimationSection>
	</section>
);

export const LeadOrHelpBlade = observer(LeadOrHelpInternal);
