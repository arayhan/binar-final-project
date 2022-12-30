// ==================================
// TYPES
// ==================================
export const REQUEST_UPLOAD_DOCUMENT = 'REQUEST_UPLOAD_DOCUMENT';
export const RESPONSE_UPLOAD_DOCUMENT = 'RESPONSE_UPLOAD_DOCUMENT';
export const SET_TRANSACTION_TEMP_DATA = 'SET_TRANSACTION_TEMP_DATA';

// ==================================
// DISPATCHERS
// ==================================
export const setTransactionTempData = (data) => ({
	type: SET_TRANSACTION_TEMP_DATA,
	payload: { data }
});

export const requestUploadDocument = () => ({
	type: REQUEST_UPLOAD_DOCUMENT
});

export const responseUploadDocument = ({ success, data, error }) => ({
	type: RESPONSE_UPLOAD_DOCUMENT,
	payload: { success, data, error }
});
