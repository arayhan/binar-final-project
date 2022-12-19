import { AUTH_REQUEST_LOGIN, AUTH_REQUEST_LOGOUT, AUTH_RESPONSE_LOGIN } from './auth.types';

const initialState = {
	user: null,

	error: null,

	isAuthenticated: false,
	isProcessingLogin: false
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case AUTH_REQUEST_LOGIN:
			return {
				...state,
				isProcessingLogin: true
			};

		case AUTH_RESPONSE_LOGIN:
			return {
				...state,
				user: payload.response || null,
				error: payload.error || null,
				isProcessingLogin: false,
				isAuthenticated: payload.success
			};

		case AUTH_REQUEST_LOGOUT:
			return {
				...state,
				user: null,
				isAuthenticated: false
			};

		default:
			return state;
	}
}
