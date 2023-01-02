import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react';
import App from '@/App';
import { store, persistor } from '@/store/store';
import { OAUTH_CLIENT_ID } from './utils/constants';

import 'react-loading-skeleton/dist/skeleton.css';
import 'sweetalert2/src/sweetalert2.scss';
import '@/styles/custom-notify-toast.css';
import '@/styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<GoogleOAuthProvider clientId={OAUTH_CLIENT_ID}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</GoogleOAuthProvider>
		</PersistGate>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
