import {
	SET_TRANSACTION_TEMP_DATA,
	REQUEST_UPLOAD_DOCUMENT,
	RESPONSE_UPLOAD_DOCUMENT,
	REQUEST_CREATE_TRANSACTION,
	RESPONSE_CREATE_TRANSACTION,
	REQUEST_GET_TRANSACTION_ITEM,
	RESPONSE_GET_TRANSACTION_ITEM,
	RESPONSE_GET_TRANSACTION_LIST,
	REQUEST_GET_TRANSACTION_LIST
} from './transaction.types';

const initialState = {
	transactionTempData: null,

	transactionList: null,
	transactionItem: null,

	fetchingTransactionList: false,
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

		case REQUEST_GET_TRANSACTION_LIST:
			return {
				...state,
				fetchingTransactionList: true
			};

		case RESPONSE_GET_TRANSACTION_LIST:
			return {
				...state,
				fetchingTransactionList: false,
				transactionList: payload.data || null
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
