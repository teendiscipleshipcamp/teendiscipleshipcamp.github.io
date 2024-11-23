import { observer } from "mobx-react-lite";
import React, { useRef } from "react";
import { FC } from "react";
import emailjs from '@emailjs/browser';

const ContactBladeInternal: FC = () => {
	return (
		<section id='contact'>
		<div className='inner'>
			<section>
				<form method='post' action='#'>
					<div className='fields'>
						<div className='field half'>
							<label htmlFor='name'>Name</label>
							<input type='text' name='name' id='name' />
						</div>
						<div className='field half'>
							<label htmlFor='email'>Email</label>
							<input type='text' name='email' id='email' />
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
			</section>
			<section className='split'>
				<section>
					<div className='contact-method'>
						<span className='icon solid alt fa-envelope'></span>
						<h3>Email</h3>
						<a href='mailto:teendiscipleshipcamp@gmail.com'>
							teendiscipleshipcamp@gmail.com
						</a>
					</div>
				</section>
				<section>
					<div className='contact-method'>
						<span className='icon solid alt fa-phone'></span>
						<h3>Phone</h3>
						<span>(09) 000-0000</span>
					</div>
				</section>
				<section>
					<div className='contact-method'>
						<span className='icon solid alt fa-home'></span>
						<h3>Address</h3>
						<span>
							1234 Somewhere Road #5432
							<br />
							Nashville, TN 00000
							<br />
							United States of America
						</span>
					</div>
				</section>
			</section>
		</div>
	</section>
	);
}

export const ContactBlade = observer(ContactBladeInternal);


export const ContactUs = () => {
	const form = useRef<string | HTMLFormElement>('');
  
	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs
		.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
		  publicKey: 'YOUR_PUBLIC_KEY',
		})
		.then(
		  () => {
			console.log('SUCCESS!');
		  },
		  (error) => {
			console.log('FAILED...', error.text);
		  },
		);
	};
  
	return (
	  <form ref={form} onSubmit={sendEmail}>
		<label>Name</label>
		<input type="text" name="user_name" />
		<label>Email</label>
		<input type="email" name="user_email" />
		<label>Message</label>
		<textarea name="message" />
		<input type="submit" value="Send" />
	  </form>
	);
  };