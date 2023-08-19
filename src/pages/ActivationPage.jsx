import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { server } from '../server';

const ActivationPage = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const activation_token = queryParams.get('jwt');

	console.log(useParams());
	// const { activation_token } = useParams();
	const [error, setError] = useState(false);

	useEffect(() => {
		console.log('Activation page activation token: ', activation_token);

		if (activation_token) {
			const sendRequest = async () => {
				await axios
					.post(`${server}/user/activation`, {
						activation_token,
					})
					.then((res) => {
						console.log(res);
					})
					.catch((err) => {
						console.log('error: ', err);
						setError(true);
					});
			};
			sendRequest();
		}
	}, []);

	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{error ? <p>Your token is expired!</p> : <p>Your account has been created suceessfully!</p>}
		</div>
	);
};

export default ActivationPage;
