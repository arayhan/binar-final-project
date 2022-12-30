import { API_UPLOAD_DOCUMENT } from '../apis';
import { http } from '../http';
import { requestSaveTransactionTempData, requestUploadDocument, responseUploadDocument } from './transaction.types';

export const actionSaveTransactionTempData = (data) => async (dispatch) => dispatch(requestSaveTransactionTempData(data));

export const actionUploadDocument = (formData, callback) => async (dispatch) => {
	dispatch(requestUploadDocument());

	try {
		const request = formData;
		const response = await http.post(API_UPLOAD_DOCUMENT, request);

		callback({ success: true, message: 'Upload document success', response: response.data });
		dispatch(responseUploadDocument({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		callback({ success: false, message });
		dispatch(responseUploadDocument({ success: false, error: message }));
	}
};
