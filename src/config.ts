type Phase = 'hibernation' | 'upcoming';

interface EmailJSConfig {
	EMAILJS_SERVICE_ID: string;
	EMAILJS_TEMPLATE_ID: string;
	EMAILJS_PUBLIC_KEY: string;
}

interface Address {
	line1: string;
	line2: string;
	line3: string;
}

interface SiteConfig {
	phase: Phase;
	siteTitle: string;
	contactEmail: string;
	contactPhone: string;
	address: Address;
	emailJS: EmailJSConfig;
	version: string;
	galleryDriveUrl: string;
	leadersSignUpForm: string;
	campersSignUpForm: string;
}

export const config: SiteConfig = {
	version: '1.5.5',
	phase: 'hibernation',
	siteTitle: 'Teen Discipleship Camp',
	contactEmail: 'teendiscipleshipcamp@gmail.com',
	contactPhone: '(09) 000-0000',
	address: {
		line1: '280 Molesworth Drive',
		line2: 'Mangawhai Heads, 0505',
		line3: 'New Zealand',
	},
	emailJS: {
		EMAILJS_SERVICE_ID: 'service_xa3xje9',
		EMAILJS_TEMPLATE_ID: 'template_8zbzu4t',
		EMAILJS_PUBLIC_KEY: '2n9paRn-soyQjDywu',
	},
	galleryDriveUrl:
		'https://drive.google.com/drive/folders/1S6pB02WtUkOnEqfugnz8i87b4P-Sb1zp?usp=sharing',
	leadersSignUpForm: 'https://forms.gle/2qhEDvm1a9MwwcZTA',
	campersSignUpForm: 'https://forms.gle/2qhEDvm1a9MwwcZTA',
};
