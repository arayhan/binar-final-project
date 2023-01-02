import { STORE_KEY } from '@/utils/constants';
import { API_ADMIN_AUTH_LOGIN } from '../../apis';
import { http } from '../../http';
import store from 'store';
import { requestAdminLogin, requestAdminLogout, responseAdminLogin } from './admin.auth.types';

export const actionAdminLogin = (values, callback) => async (dispatch) => {
	dispatch(requestAdminLogin());

	try {
		const request = { username: values.username, password: values.password };
		const response = await http.post(API_ADMIN_AUTH_LOGIN, request);

		store.set(STORE_KEY.ADMIN_DATA, response.data.data);
		store.set(STORE_KEY.ADMIN_TOKEN, response.data.data.token);

		callback({ success: true });
		dispatch(responseAdminLogin({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		callback({ success: false, message });
		dispatch(responseAdminLogin({ success: false, error: message }));
	}
};

export const actionAdminLogout = (callback) => (dispatch) => {
	store.remove(STORE_KEY.ADMIN_DATA);
	store.remove(STORE_KEY.ADMIN_TOKEN);
	dispatch(requestAdminLogout());
	callback();
};
