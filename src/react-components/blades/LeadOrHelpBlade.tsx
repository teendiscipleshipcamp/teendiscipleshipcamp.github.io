import { observer } from 'mobx-react-lite';
import { BladeHeader } from '../bladeparts/BladeHeader.tsx';
import React, { FC } from 'react';
import { AnimationSection } from '../bladeparts/AnimationSection.tsx';

const LeadOrHelpInternal: FC = () => {
	const leaderSignUpLink = 'https://forms.gle/SXnuwRDE39CieC4G7';

    return (
        <section id='lead-or-help'>
            <AnimationSection animation='fade-in-section'  className='inner'>
                <BladeHeader content='Lead.' />
                <p>Keen to lead at one of our camps, or use your gifts to help? We're always looking for more people to join our team!
                Reach out to us below if you have any questions or would like to get involved, or sign up to lead at our next camp below.</p>
                <ul className='actions'>
                    <li>
                        <a href={leaderSignUpLink} target='_blank' className='button' rel="noreferrer">
                            Sign up
                        </a>
                    </li>
                </ul>
            </AnimationSection>
        </section>
    );
};

export const LeadOrHelpBlade = observer(LeadOrHelpInternal);
