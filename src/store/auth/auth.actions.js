import { AUTH_REQUEST_LOGIN, AUTH_REQUEST_LOGOUT, AUTH_RESPONSE_LOGIN } from './auth.types';

const requestLogin = () => ({
	type: AUTH_REQUEST_LOGIN
});

const responseLogin = (data) => ({
	type: AUTH_RESPONSE_LOGIN,
	payload: { data }
});

const requestLogout = () => ({
	type: AUTH_REQUEST_LOGOUT
});

export const authLogin = (values) => (dispatch) => {
	dispatch(requestLogin());
	dispatch(responseLogin(values));
};

export const authLogout = (callback) => (dispatch) => {
	dispatch(requestLogout());
	callback();
};
