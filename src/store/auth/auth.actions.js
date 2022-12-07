import { API_AUTH_LOGIN } from '../apis';
import { http } from '../http';
import { AUTH_REQUEST_LOGIN, AUTH_REQUEST_LOGOUT, AUTH_RESPONSE_LOGIN } from './auth.types';

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

const requestLogout = () => ({
	type: AUTH_REQUEST_LOGOUT
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

export const authLogout = (callback) => (dispatch) => {
	dispatch(requestLogout());
	callback();
};
