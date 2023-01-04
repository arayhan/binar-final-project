import { API_CHECKIN } from '../apis';
import { http } from '../http';
import { requestCheckIn, responseCheckIn } from './eticket.types';

export const actionCheckIn = (request, callback) => async (dispatch) => {
	dispatch(requestCheckIn());

	try {
		const response = await http.post(API_CHECKIN, request);

		if (callback) callback({ success: true, message: 'Check-In Berhasil!', data: response.data.data });
		dispatch(responseCheckIn({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		if (callback) callback({ success: false, message });
		dispatch(responseCheckIn({ success: false, error: message }));
	}
};
