import { API_PROFILE } from '../apis';
import { http } from '../http';
import { requestGetProfile, requestUpdateProfile, responseGetProfile, responseUpdateProfile } from './profile.types';

export const actionGetProfile = (values, callback) => async (dispatch) => {
	dispatch(requestGetProfile());
	try {
		const request = {
			email: values.email,
			username: values.username,
			name: values.name,
			phone: values.phone
		};

		const response = await http.get(API_PROFILE, request);

		if (callback) callback({ success: response.data.status, message: response.data.message, response: response.data.data });
		dispatch(responseGetProfile({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		if (callback) callback({ success: false, message });
		dispatch(responseGetProfile({ success: false, error: message }));
	}
};

export const actionUpdateProfile = (values, callback) => async (dispatch) => {
	dispatch(requestUpdateProfile());
	try {
		const request = {
			email: values.email,
			username: values.username,
			name: values.name,
			phone: values.phone
		};

		const response = await http.put(API_PROFILE, request);

		if (callback) callback({ success: response.data.status, message: response.data.message, response: response.data.data });
		dispatch(responseUpdateProfile({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		if (callback) callback({ success: false, message });
		dispatch(responseUpdateProfile({ success: false, error: message }));
	}
};
