import { APP_NAME, LOGIN_METHODS, STORE_KEY } from '@/utils/constants';
import { API_AUTH_LOGIN, API_AUTH_REGISTER, API_AUTH_EMAIL_ACTIVATION, API_AUTH_LOGIN_WITH_GOOGLE } from '../apis';
import { http } from '../http';
import store from 'store';
import {
	requestEmailActivation,
	requestLogin,
	requestLoginWithGoogle,
	requestLogout,
	requestRegister,
	responseEmailActivation,
	responseLogin,
	responseRegister
} from './auth.types';

const { GOOGLE } = LOGIN_METHODS;

export const actionLogin = (values, method, callback) => async (dispatch) => {
	dispatch(requestLogin());

	if (method === GOOGLE) dispatch(requestLoginWithGoogle());

	try {
		let request, response;

		switch (method) {
			case GOOGLE:
				request = { credential: values.credential };
				response = await http.post(API_AUTH_LOGIN_WITH_GOOGLE, request);
				break;

			default:
				request = { email: values.email, password: values.password };
				response = await http.post(API_AUTH_LOGIN, request);
				break;
		}

		store.set(STORE_KEY.USER_DATA, response.data.data);
		store.set(STORE_KEY.TOKEN, response.data.data.token);

		callback({ success: true });
		dispatch(responseLogin({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		callback({ success: false, message });
		dispatch(responseLogin({ success: false, error: message }));
	}
};

export const actionRegister = (values, callback) => async (dispatch) => {
	dispatch(requestRegister());

	try {
		const request = {
			phone: values.phone,
			email: values.email,
			name: values.name,
			username: values.username,
			password: values.password
		};

		const message = `Terima kasih sudah mendaftar di ${APP_NAME}, Mohon cek email Anda terlebih dahulu untuk aktivasi email.`;
		const response = await http.post(API_AUTH_REGISTER, request);

		callback({ success: true, message });
		dispatch(responseRegister({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response.data?.message || error.message;

		callback({ success: false, message });
		dispatch(responseRegister({ success: false, error: message }));
	}
};

export const actionEmailActivation = (params, callback) => async (dispatch) => {
	dispatch(requestEmailActivation());

	try {
		const response = await http.get(`${API_AUTH_EMAIL_ACTIVATION}/${params.token}`);

		callback({ success: true, message: 'Aktivasi email berhasil' });
		dispatch(responseEmailActivation({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response.data?.message || error.message;

		callback({ success: false, message: 'Aktivasi email gagal' });
		dispatch(responseEmailActivation({ success: false, error: message }));
	}
};

export const actionLogout = (callback) => (dispatch) => {
	store.remove(STORE_KEY.USER_DATA);
	store.remove(STORE_KEY.TOKEN);
	dispatch(requestLogout());
	callback();
};
