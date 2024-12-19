import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/fontawesome-all.min.css';
import './assets/css/main.css';
import './assets/css/noscript.css';
import './assets/css/overrides.css';
import App from './App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
