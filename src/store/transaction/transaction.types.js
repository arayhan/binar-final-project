// ==================================
// TYPES
// ==================================
export const REQUEST_UPLOAD_DOCUMENT = 'REQUEST_UPLOAD_DOCUMENT';
export const RESPONSE_UPLOAD_DOCUMENT = 'RESPONSE_UPLOAD_DOCUMENT';
export const REQUEST_CREATE_TRANSACTION = 'REQUEST_CREATE_TRANSACTION';
export const RESPONSE_CREATE_TRANSACTION = 'RESPONSE_CREATE_TRANSACTION';
export const REQUEST_GET_TRANSACTION_LIST = 'REQUEST_GET_TRANSACTION_LIST';
export const RESPONSE_GET_TRANSACTION_LIST = 'RESPONSE_GET_TRANSACTION_LIST';
export const REQUEST_GET_TRANSACTION_ITEM = 'REQUEST_GET_TRANSACTION_ITEM';
export const RESPONSE_GET_TRANSACTION_ITEM = 'RESPONSE_GET_TRANSACTION_ITEM';
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

export const requestCreateTransaction = () => ({
	type: REQUEST_CREATE_TRANSACTION
});

export const responseCreateTransaction = ({ success, data, error }) => ({
	type: RESPONSE_CREATE_TRANSACTION,
	payload: { success, data, error }
});

export const requestGetTransactionList = () => ({
	type: REQUEST_GET_TRANSACTION_LIST
});

export const responseGetTransactionList = ({ success, data, error }) => ({
	type: RESPONSE_GET_TRANSACTION_LIST,
	payload: { success, data, error }
});

export const requestGetTransactionItem = () => ({
	type: REQUEST_GET_TRANSACTION_ITEM
});

export const responseGetTransactionItem = ({ success, data, error }) => ({
	type: RESPONSE_GET_TRANSACTION_ITEM,
	payload: { success, data, error }
});
