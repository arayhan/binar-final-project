import { objectToQueryString } from '@/utils/helpers';
import { API_TRANSACTION, API_UPLOAD_DOCUMENT } from '../apis';
import { http } from '../http';
import {
	requestCreateTransaction,
	requestGetTransactionItem,
	requestGetTransactionList,
	requestUploadDocument,
	responseCreateTransaction,
	responseGetTransactionItem,
	responseGetTransactionList,
	responseUploadDocument,
	setTransactionTempData
} from './transaction.types';

export const actionSetTransactionTempData = (data) => async (dispatch) => dispatch(setTransactionTempData(data));

export const actionUploadDocument = (file, callback) => async (dispatch) => {
	dispatch(requestUploadDocument());

	try {
		const formData = new FormData();
		formData.append('document', file);

		const response = await http.post(API_UPLOAD_DOCUMENT, formData);

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

		callback({ success: true, message: 'Transaksi berhasil dibuat', response: response.data.data });
		dispatch(responseCreateTransaction({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		callback({ success: false, message });
		dispatch(responseCreateTransaction({ success: false, error: message }));
	}
};

export const actionGetTransactionList = (params, callback) => async (dispatch) => {
	dispatch(requestGetTransactionList());

	try {
		const defaultParams = { page: params?.page || 0, limit: params?.limit || 0 };
		const queryParams = objectToQueryString({ ...defaultParams });
		const response = await http.get(API_TRANSACTION + queryParams);

		callback({ success: response.data.status, message: response.data.message, response: response.data.data });
		dispatch(responseGetTransactionList({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		callback({ success: false, message });
		dispatch(responseGetTransactionList({ success: false, error: message }));
	}
};

export const actionGetTransactionItem = (transactionID, callback) => async (dispatch) => {
	dispatch(requestGetTransactionItem());

	try {
		const response = await http.get(`${API_TRANSACTION}/${transactionID}`);

		callback({ success: response.data.status, message: response.data.message, response: response.data.data });
		dispatch(responseGetTransactionItem({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		callback({ success: false, message });
		dispatch(responseGetTransactionItem({ success: false, error: message }));
	}
};
