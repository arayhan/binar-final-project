import { ACTION_AUTH } from '@/store/actions';
import { GoogleLogin } from '@react-oauth/google';
import React from 'react';

export const ButtonLoginWithGoogle = () => {
	const { actionLoginWithGoogle } = ACTION_AUTH;

	const handleGoogleLogin = (response) => {
		dispatch(
			actionLoginWithGoogle({ values: response }, ({ success, message }) => {
				if (message) notify.show(message, success ? 'success' : 'error');
			})
		);
	};

	return (
		<div className="flex justify-center">
			<GoogleLogin
				locale="id"
				text="signin_with"
				shape="rectangular"
				theme="outline"
				width="100%"
				logo_alignment="center"
				onSuccess={handleGoogleLogin}
				onError={() => notify.show('Login Failed', 'error')}
			/>
		</div>
	);
};
