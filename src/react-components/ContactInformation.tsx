import { observer } from "mobx-react-lite";
import React from "react";
import { FC } from "react";

const ContactPostalAddress: FC = () => {
    const line1 = '280 Molesworth Drive';
    const line2 = 'Mangawhai Heads, 0505';
    const line3 = 'New Zealand';

    return (
        <span>
            {line1}
            <br />
            {line2}
            <br />
            {line3}
        </span>
    )
};

const ContactInformationInternal: FC = () => {
    const contactEmail = 'teendiscipleshipcamp@gmail.com';
    const contactPhone = '(09) 000-0000';

	return (
        <>
            <section>
                <div className='contact-method'>
                    <span className='icon solid alt fa-envelope'></span>
                    <h3>Email</h3>
                    <a href={`mailto:${contactEmail}`}>
                        {contactEmail}
                    </a>
                </div>
            </section>
            <section>
                <div className='contact-method'>
                    <span className='icon solid alt fa-phone'></span>
                    <h3>Phone</h3>
                    <span>{contactPhone}</span>
                </div>
            </section>
            <section>
                <div className='contact-method'>
                    <span className='icon solid alt fa-home'></span>
                    <h3>Address</h3>
                    <ContactPostalAddress/>
                </div>
            </section>
        </>
	);
}

export const ContactInformation = observer(ContactInformationInternal);