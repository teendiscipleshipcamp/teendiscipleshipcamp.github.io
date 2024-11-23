import { observer } from "mobx-react-lite";
import React from "react";
import { FC } from "react";
import { ContactForm } from "../ContactForm.tsx";
import { ContactInformation } from "../ContactInformation.tsx";

const ContactBladeInternal: FC = () => {
	return (
		<section id='contact'>
		<div className='inner'>
			<section>
				<ContactForm/>
			</section>
			<section className='split'>
				<ContactInformation/>
			</section>
		</div>
	</section>
	);
}

export const ContactBlade = observer(ContactBladeInternal);