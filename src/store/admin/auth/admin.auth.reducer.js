import store from 'store';
import { STORE_KEY } from '@/utils/constants';
import { AUTH_REQUEST_ADMIN_LOGIN, AUTH_REQUEST_ADMIN_LOGOUT, AUTH_RESPONSE_ADMIN_LOGIN } from './admin.auth.types';

const initialState = {
	admin: store.get(STORE_KEY.ADMIN_DATA) || null,

	isAdminAuthenticated: !!store.get(STORE_KEY.ADMIN_TOKEN) || false,
	isAdminProcessingLogin: false
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case AUTH_REQUEST_ADMIN_LOGIN:
			return {
				...state,
				isAdminProcessingLogin: true
			};

		case AUTH_RESPONSE_ADMIN_LOGIN:
			return {
				...state,
				admin: payload.data || null,
				isAdminProcessingLogin: false,
				isAdminAuthenticated: payload.success
			};

		case AUTH_REQUEST_ADMIN_LOGOUT:
			return {
				...state,
				admin: null,
				isAdminAuthenticated: false
			};

		default:
			return state;
	}
}
