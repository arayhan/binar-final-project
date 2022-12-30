import { API_UPLOAD_DOCUMENT } from '../apis';
import { http } from '../http';
import { requestSaveTransactionTempData, requestUploadDocument } from './transaction.types';

export const actionSaveTransactionTempData = (data) => async (dispatch) => dispatch(requestSaveTransactionTempData(data));

export const actionUploadDocument = (data) => async (dispatch) => {
	dispatch(requestUploadDocument());

	try {
		const request = { document: data };
		const response = await http.post(API_UPLOAD_DOCUMENT, request);
		console.log({ response });
		// dispatch(requestUploadDocument(response.data));
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		callback({ success: false, message });
		dispatch(responseFlightList({ success: false, error: message }));
	}
};
