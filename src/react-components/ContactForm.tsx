import { observer } from "mobx-react-lite";
import React, { useRef } from "react";
import { FC } from "react";
import emailjs from '@emailjs/browser';

const ContactFormInternal: FC = () => {

	const EMAILJS_SERVICE_ID = 'service_xa3xje9';
	const EMAILJS_TEMPLATE_ID = 'template_8zbzu4t';
	const EMAILJS_PUBLIC_KEY = '2n9paRn-soyQjDywu';
	const form = useRef<HTMLFormElement | null>(null);
  
	const sendEmail = (e) => {
	  e.preventDefault();

	  if (form.current === null) {
		console.error('Failed to find form');
		return;
	  }
  
	  emailjs
		.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
		  publicKey: EMAILJS_PUBLIC_KEY,
		})
		.then(
		  () => {
			console.log('Sent message successfully');
		  },
		  (error) => {
			console.error('Failed to send message', error.text);
		  },
		);
	};

	return (
        <form ref={form} onSubmit={sendEmail}>
            <div className='fields'>
                <div className='field half'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='user_name' id='name' />
                </div>
                <div className='field half'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='user_email' id='email' />
                </div>
                <div className='field'>
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' id='message' rows={6}></textarea>
                </div>
            </div>
            <ul className='actions'>
                <li>
                    <input type='submit' value='Send Message' className='primary' />
                </li>
                <li>
                    <input type='reset' value='Clear' />
                </li>
            </ul>
        </form>
	);
}

export const ContactForm = observer(ContactFormInternal);