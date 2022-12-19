import { API_AUTH_LOGIN, API_AUTH_REGISTER, API_AUTH_EMAIL_ACTIVATION } from '../apis';
import { http } from '../http';
import {
	AUTH_REQUEST_LOGIN,
	AUTH_RESPONSE_LOGIN,
	AUTH_REQUEST_REGISTER,
	AUTH_RESPONSE_REGISTER,
	AUTH_REQUEST_EMAIL_ACTIVATION,
	AUTH_RESPONSE_EMAIL_ACTIVATION,
	AUTH_REQUEST_LOGOUT,
	AUTH_CLEAR_ERROR
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

const responseEmailActivation = ({ success, response, error }) => ({
	type: AUTH_RESPONSE_EMAIL_ACTIVATION,
	payload: { success, response, error }
});

const requestLogout = () => ({
	type: AUTH_REQUEST_LOGOUT
});

const clearError = () => ({
	type: AUTH_CLEAR_ERROR
});

// ==================================
// ACTIONS
// ==================================
export const authLogin = (values) => async (dispatch) => {
	dispatch(requestLogin());

	try {
		const request = { email: values.email, password: values.password };
		const response = await http.post(API_AUTH_LOGIN, request);

		dispatch(responseLogin({ success: true, response: response.data.data }));
	} catch (error) {
		dispatch(responseLogin({ success: false, error: error.response.data || error }));
	}
};

export const authRegister = (values) => async (dispatch) => {
	dispatch(requestRegister());

	try {
		const request = {
			phone: values.phone,
			email: values.email,
			name: values.name,
			username: values.username,
			password: values.password
		};
		const response = await http.post(API_AUTH_REGISTER, request);

		dispatch(responseRegister({ success: true, response: response.data.data }));
	} catch (error) {
		dispatch(responseRegister({ success: false, error: error.response.data || error }));
	}
};

export const authEmailActivation = (values, callback) => async (dispatch) => {
	dispatch(requestEmailActivation());

	try {
		const response = await http.get(`${API_AUTH_EMAIL_ACTIVATION}/${values.token}`);
		callback();
		dispatch(responseEmailActivation({ success: true, response: response.data.data }));
	} catch (error) {
		dispatch(responseEmailActivation({ success: false, error: error.response.data || error }));
	}
};

export const authLogout = (callback) => (dispatch) => {
	dispatch(requestLogout());
	callback();
};

export const authClearError = () => (dispatch) => {
	dispatch(clearError());
};
