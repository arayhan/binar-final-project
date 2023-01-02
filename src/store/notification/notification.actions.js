import { API_NOTIFICATION } from '../apis';
import { http } from '../http';
import { requestNotificationList, responseNotificationList } from './notification.types';
import { objectToQueryString } from '@/utils/helpers';

export const actionGetNotificationList = (params, callback) => async (dispatch) => {
	dispatch(requestNotificationList());

	try {
		const defaultParams = { page: 1, limit: 10 };
		const objectParams = params || {};
		const queryParams = objectToQueryString({ ...defaultParams, ...objectParams });
		const response = await http.get(API_NOTIFICATION + queryParams);

		if (callback) callback({ success: true, data: response.data.data });
		dispatch(responseNotificationList({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		if (callback) callback({ success: false, message });
		dispatch(responseNotificationList({ success: false, error: message }));
	}
};

export const actionPutReadNotification = (notificationID, callback) => async (dispatch) => {
	dispatch(requestNotificationList());

	try {
		const response = await http.put(`${API_NOTIFICATION}/${notificationID}`);

		callback({ success: true, data: response.data.data });
		dispatch(responseNotificationList({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		callback({ success: false, message });
		dispatch(responseNotificationList({ success: false, error: message }));
	}
};
