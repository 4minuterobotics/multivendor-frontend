import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage, SignupPage } from './Routes.js';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
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
