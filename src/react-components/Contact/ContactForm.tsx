import { observer } from 'mobx-react-lite';
import { useRef } from 'react';
import { FC } from 'react';
import emailjs from '@emailjs/browser';
import { Bounce, ToastContainer, ToastPosition, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { config } from '../../config.ts';

const props = {
	position: 'bottom-left' as ToastPosition,
	autoClose: 1500,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: false,
	draggable: false,
	progress: undefined,
	theme: 'dark',
	transition: Bounce,
	closeButton: false,
};

const ContactFormInternal: FC = () => {
	const form = useRef<HTMLFormElement | null>(null);

	const { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } =
		config.emailJS;

	const sendEmail = (e) => {
		e.preventDefault();

		if (form.current === null) return;

		const loadedVariablesSuccessfully =
			EMAILJS_SERVICE_ID !== undefined &&
			EMAILJS_TEMPLATE_ID !== undefined &&
			EMAILJS_PUBLIC_KEY !== undefined;

		if (!loadedVariablesSuccessfully)
			return toast.error("Sorry, couldn't load EmailJS", props);

		emailjs
			.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
				publicKey: EMAILJS_PUBLIC_KEY,
			})
			.then(
				() => toast.success('Thank you!', props),
				(_) => toast.error('Sorry, try again', props)
			)
			.finally(() => form.current?.reset());
	};

	return (
		<>
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
			<ToastContainer />
		</>
	);
};

export const ContactForm = observer(ContactFormInternal);
