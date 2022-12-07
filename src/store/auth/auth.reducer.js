import { AUTH_REQUEST_LOGIN, AUTH_RESPONSE_LOGIN } from './auth.types';

const initialState = {
	user: null,
	isProcessingLogin: false
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case AUTH_REQUEST_LOGIN:
			return {
				...state,
				isProcessingLogin: true
			};

		case AUTH_RESPONSE_LOGIN:
			return {
				...state,
				isProcessingLogin: false,
				user: action.payload.data
			};
		default:
			return state;
	}
}
