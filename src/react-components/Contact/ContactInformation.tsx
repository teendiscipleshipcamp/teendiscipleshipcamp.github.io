import { observer } from "mobx-react-lite";
import React from "react";
import { FC } from "react";
import { config } from "../../config.ts";

const ContactPostalAddress: FC = () => (
        <span>
            {config.address.line1}
            <br />
            {config.address.line2}
            <br />
            {config.address.line3}
        </span>
    );

const ContactInformationInternal: FC = () => (
        <>
            {config.contactEmail && (<section>
                <div className='contact-method'>
                    <span className='icon solid alt fa-envelope'></span>
                    <h3>Email</h3>
                    <a href={`mailto:${config.contactEmail}`}>
                        {config.contactEmail}
                    </a>
                </div>
            </section>)}
            {config.contactPhone && (<section>
                <div className='contact-method'>
                    <span className='icon solid alt fa-phone'></span>
                    <h3>Phone</h3>
                    <span>{config.contactPhone}</span>
                </div>
            </section>)}
            <section>
                <div className='contact-method'>
                    <span className='icon solid alt fa-home'></span>
                    <h3>Address</h3>
                    <ContactPostalAddress/>
                </div>
            </section>
        </>
	);

export const ContactInformation = observer(ContactInformationInternal);