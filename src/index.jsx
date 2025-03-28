import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/fontawesome-all.min.css';
import './assets/css/main.css';
import App from './App.tsx';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
