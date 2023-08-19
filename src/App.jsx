import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, SignupPage, ActivationPage } from './Routes.js';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import { loadUser } from './redux/actions/user';
import Store from './redux/store';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	useEffect(() => {
		Store.dispatch(loadUser());
		// Store.dispatch(loadSeller());
		// Store.dispatch(getAllProducts());
		// Store.dispatch(getAllEvents());
		// getStripeApikey();
	}, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/login'
					element={<LoginPage />}
				/>
				<Route
					path='/sign-up'
					element={<SignupPage />}
				/>
				<Route
					path='/activation'
					element={<ActivationPage />}
				/>
			</Routes>
			<ToastContainer
				position='bottom-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</BrowserRouter>
	);
};

export default App;
