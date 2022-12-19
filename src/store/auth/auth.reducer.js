import {
	AUTH_REQUEST_LOGIN,
	AUTH_REQUEST_REGISTER,
	AUTH_REQUEST_LOGOUT,
	AUTH_RESPONSE_LOGIN,
	AUTH_RESPONSE_REGISTER,
	AUTH_CLEAR_ERROR,
	AUTH_REQUEST_EMAIL_ACTIVATION,
	AUTH_RESPONSE_EMAIL_ACTIVATION
} from './auth.types';

const initialState = {
	user: null,

	error: null,

	isAuthenticated: false,
	isProcessingLogin: false,
	isProcessingRegister: false,
	isProcessingEmailActivation: false
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

		case AUTH_REQUEST_REGISTER:
			return {
				...state,
				isProcessingRegister: true
			};

		case AUTH_RESPONSE_REGISTER:
			return {
				...state,
				user: payload.response || null,
				error: payload.error || null,
				isProcessingRegister: false,
				isAuthenticated: payload.success
			};

		case AUTH_REQUEST_EMAIL_ACTIVATION:
			return {
				...state,
				isProcessingEmailActivation: true
			};

		case AUTH_RESPONSE_EMAIL_ACTIVATION:
			return {
				...state,
				error: payload.error || null,
				isProcessingEmailActivation: false
			};

		case AUTH_REQUEST_LOGOUT:
			return {
				...state,
				user: null,
				isAuthenticated: false
			};

		case AUTH_CLEAR_ERROR:
			return {
				...state,
				error: null
			};

		default:
			return state;
	}
}
