import { PATH } from '@/configs/routes';
import { ACTION_AUTH } from '@/store/actions';
import { LOGIN_METHODS } from '@/utils/constants';
import { queryStringToObject } from '@/utils/helpers';
import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import { notify } from 'react-notify-toast';
import { useDispatch } from 'react-redux';

export const ButtonLoginWithGoogle = () => {
	const dispatch = useDispatch();
	const { actionLogin } = ACTION_AUTH;

	const handleGoogleLogin = (response) => {
		dispatch(
			actionLogin({ credential: response.credential }, LOGIN_METHODS.GOOGLE, ({ success, message }) => {
				if (message) notify.show(message, success ? 'success' : 'error');
				if (success) {
					const queryParams = location.search ? queryStringToObject(location.search) : null;
					const redirect = queryParams?.redirect || PATH.HOME;
					window.location.href = redirect;
				}
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
