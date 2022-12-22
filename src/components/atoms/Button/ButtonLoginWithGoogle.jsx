import { ACTION_AUTH } from '@/store/actions';
import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import { useDispatch } from 'react-redux';

export const ButtonLoginWithGoogle = () => {
	const dispatch = useDispatch();
	const { actionLoginWithGoogle } = ACTION_AUTH;

	const handleGoogleLogin = (response) => {
		const credential = response.credential;

		if (credential) {
			const data = JSON.parse(atob(credential.split('.')[1]));
			dispatch(actionLoginWithGoogle({ email: data.email }));
		}
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
