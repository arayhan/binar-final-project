import { APP_NAME } from '@/utils/constants';
import { API_AUTH_LOGIN, API_AUTH_REGISTER, API_AUTH_EMAIL_ACTIVATION, API_AUTH_LOGIN_WITH_GOOGLE } from '../apis';
import { http } from '../http';
import {
	AUTH_REQUEST_LOGIN,
	AUTH_RESPONSE_LOGIN,
	AUTH_RESPONSE_LOGIN_WITH_GOOGLE,
	AUTH_REQUEST_REGISTER,
	AUTH_RESPONSE_REGISTER,
	AUTH_REQUEST_EMAIL_ACTIVATION,
	AUTH_RESPONSE_EMAIL_ACTIVATION,
	AUTH_REQUEST_LOGOUT
} from './auth.types';

// ==================================
// DISPATCHERS
// ==================================
const requestLogin = () => ({
	type: AUTH_REQUEST_LOGIN
});

const responseLogin = ({ success, response, error }) => ({
	type: AUTH_RESPONSE_LOGIN,
	payload: { success, response, error }
});

const requestRegister = () => ({
	type: AUTH_REQUEST_REGISTER
});

const responseRegister = ({ success, response, error }) => ({
	type: AUTH_RESPONSE_REGISTER,
	payload: { success, response, error }
});

const requestEmailActivation = () => ({
	type: AUTH_REQUEST_EMAIL_ACTIVATION
});

const responseEmailActivation = ({ success, response, error }) => {
	return {
		type: AUTH_RESPONSE_EMAIL_ACTIVATION,
		payload: { success, response, error }
	};
};

const requestLogout = () => ({
	type: AUTH_REQUEST_LOGOUT
});

// ==================================
// ACTIONS
// ==================================
export const actionLogin = (values, callback) => async (dispatch) => {
	dispatch(requestLogin());

	try {
		const request = { email: values.email, password: values.password };
		const response = await http.post(API_AUTH_LOGIN, request);

		callback({ success: true });
		dispatch(responseLogin({ success: true, response: response.data.data }));
	} catch (error) {
		const message = error.response.data?.message || error.message;

		callback({ success: false, message });
		dispatch(responseLogin({ success: false, error: message }));
	}
};

export const actionLoginWithGoogle = (userData) => async (dispatch) => {
	dispatch(responseLogin({ success: true, response: userData }));
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
		dispatch(responseRegister({ success: true, response: response.data.data }));
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
		dispatch(responseEmailActivation({ success: true, response: response.data.data }));
	} catch (error) {
		const message = error.response.data?.message || error.message;

		callback({ success: false, message: 'Aktivasi email gagal' });
		dispatch(responseEmailActivation({ success: false, error: message }));
	}
};

export const actionLogout = (callback) => (dispatch) => {
	dispatch(requestLogout());
	callback();
};
