import { SET_TRANSACTION_TEMP_DATA, REQUEST_UPLOAD_DOCUMENT, RESPONSE_UPLOAD_DOCUMENT } from './transaction.types';

const initialState = {
	transactionTempData: null,

	processingUploadDocument: false
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

		default:
			return state;
	}
}
