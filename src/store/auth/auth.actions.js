import { AUTH_REQUEST_LOGIN, AUTH_RESPONSE_LOGIN } from './auth.types';

const requestLogin = () => ({
	type: AUTH_REQUEST_LOGIN
});

const responseLogin = (data) => ({
	type: AUTH_RESPONSE_LOGIN,
	payload: { data }
});

export const authLogin = (values) => (dispatch) => {
	dispatch(requestLogin());
	dispatch(responseLogin(values));
};
