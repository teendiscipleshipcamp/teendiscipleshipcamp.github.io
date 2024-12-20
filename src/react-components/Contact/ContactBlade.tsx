import { observer } from "mobx-react-lite";
import React from "react";
import { FC } from "react";
import { ContactForm } from "./ContactForm.tsx";
import { ContactInformation } from './ContactInformation.tsx';
import { AnimationSection } from "../bladeparts/AnimationSection.tsx";

const ContactBladeInternal: FC = () => {
	return (
		<section id='contact'>
			<AnimationSection animation='scale-in-section' className='inner'>
				<section>
					<ContactForm/>
				</section>
				<section className='split'>
					<ContactInformation/>
				</section>
			</AnimationSection>
		</section>
	);
}

export const ContactBlade = observer(ContactBladeInternal);