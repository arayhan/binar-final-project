// ==================================
// TYPES
// ==================================
export const AUTH_REQUEST_ADMIN_LOGIN = 'AUTH_REQUEST_ADMIN_LOGIN';
export const AUTH_RESPONSE_ADMIN_LOGIN = 'AUTH_RESPONSE_ADMIN_LOGIN';
export const AUTH_REQUEST_ADMIN_LOGOUT = 'AUTH_REQUEST_ADMIN_LOGOUT';

// ==================================
// DISPATCHERS
// ==================================
export const requestAdminLogin = () => ({
	type: AUTH_REQUEST_ADMIN_LOGIN
});

export const responseAdminLogin = ({ success, data, error }) => ({
	type: AUTH_RESPONSE_ADMIN_LOGIN,
	payload: { success, data, error }
});

export const requestAdminLogout = () => ({
	type: AUTH_REQUEST_ADMIN_LOGOUT
});
