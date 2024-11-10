import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './assets/css/fontawesome-all.min.css';
import './assets/css/main.css';
import './assets/css/noscript.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
