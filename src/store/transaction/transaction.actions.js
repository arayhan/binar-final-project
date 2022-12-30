import { API_TRANSACTION, API_UPLOAD_DOCUMENT } from '../apis';
import { http } from '../http';
import {
	requestCreateTransaction,
	requestUploadDocument,
	responseCreateTransaction,
	responseUploadDocument,
	setTransactionTempData
} from './transaction.types';

export const actionSetTransactionTempData = (data) => async (dispatch) => dispatch(setTransactionTempData(data));

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

export const actionCreateTransaction = (request, callback) => async (dispatch) => {
	dispatch(requestCreateTransaction());

	try {
		const response = await http.post(API_TRANSACTION, request);

		callback({ success: true, message: 'Transaksi berhasil dibuat', response: response.data });
		dispatch(responseCreateTransaction({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		callback({ success: false, message });
		dispatch(responseCreateTransaction({ success: false, error: message }));
	}
};
