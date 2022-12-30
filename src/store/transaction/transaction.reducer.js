import {
	SET_TRANSACTION_TEMP_DATA,
	REQUEST_UPLOAD_DOCUMENT,
	RESPONSE_UPLOAD_DOCUMENT,
	REQUEST_CREATE_TRANSACTION,
	RESPONSE_CREATE_TRANSACTION
} from './transaction.types';

const initialState = {
	transactionTempData: null,

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
