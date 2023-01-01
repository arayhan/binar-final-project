// ==================================
// TYPES
// ==================================
export const AUTH_REQUEST_LOGIN = 'AUTH_REQUEST_LOGIN';
export const AUTH_REQUEST_LOGIN_WITH_GOOGLE = 'AUTH_REQUEST_LOGIN_WITH_GOOGLE';
export const AUTH_RESPONSE_LOGIN = 'AUTH_RESPONSE_LOGIN';
export const AUTH_REQUEST_REGISTER = 'AUTH_REQUEST_REGISTER';
export const AUTH_RESPONSE_REGISTER = 'AUTH_RESPONSE_REGISTER';
export const AUTH_REQUEST_EMAIL_ACTIVATION = 'AUTH_REQUEST_EMAIL_ACTIVATION';
export const AUTH_RESPONSE_EMAIL_ACTIVATION = 'AUTH_RESPONSE_EMAIL_ACTIVATION';
export const AUTH_REQUEST_LOGOUT = 'AUTH_REQUEST_LOGOUT';

// ==================================
// DISPATCHERS
// ==================================
export const requestLogin = () => ({
	type: AUTH_REQUEST_LOGIN
});

export const requestLoginWithGoogle = () => ({
	type: AUTH_REQUEST_LOGIN_WITH_GOOGLE
});

export const responseLogin = ({ success, data, error }) => ({
	type: AUTH_RESPONSE_LOGIN,
	payload: { success, data, error }
});

export const requestRegister = () => ({
	type: AUTH_REQUEST_REGISTER
});

export const responseRegister = ({ success, data, error }) => ({
	type: AUTH_RESPONSE_REGISTER,
	payload: { success, data, error }
});

export const requestEmailActivation = () => ({
	type: AUTH_REQUEST_EMAIL_ACTIVATION
});

export const responseEmailActivation = ({ success, data, error }) => {
	return {
		type: AUTH_RESPONSE_EMAIL_ACTIVATION,
		payload: { success, data, error }
	};
};

export const requestLogout = () => ({
	type: AUTH_REQUEST_LOGOUT
});
