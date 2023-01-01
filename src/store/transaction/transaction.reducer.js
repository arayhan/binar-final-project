import {
	SET_TRANSACTION_TEMP_DATA,
	REQUEST_UPLOAD_DOCUMENT,
	RESPONSE_UPLOAD_DOCUMENT,
	REQUEST_CREATE_TRANSACTION,
	RESPONSE_CREATE_TRANSACTION,
	REQUEST_GET_TRANSACTION_ITEM,
	RESPONSE_GET_TRANSACTION_ITEM
} from './transaction.types';

const initialState = {
	transactionTempData: null,

	transactionItem: null,

	fetchingTransactionItem: false,

	processingUploadDocument: false,
	processingCreateTransaction: false
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_TRANSACTION_TEMP_DATA:
			return {
				...state,
				transactionTempData: payload.data
			};

		case REQUEST_UPLOAD_DOCUMENT:
			return {
				...state,
				processingUploadDocument: true
			};

		case RESPONSE_UPLOAD_DOCUMENT:
			return {
				...state,
				processingUploadDocument: false
			};

		case REQUEST_GET_TRANSACTION_ITEM:
			return {
				...state,
				fetchingTransactionItem: true
			};

		case RESPONSE_GET_TRANSACTION_ITEM:
			return {
				...state,
				fetchingTransactionItem: false,
				transactionItem: payload.data || null
			};

		case REQUEST_CREATE_TRANSACTION:
			return {
				...state,
				processingCreateTransaction: true
			};

		case RESPONSE_CREATE_TRANSACTION:
			return {
				...state,
				processingCreateTransaction: false
			};

		default:
			return state;
	}
}
