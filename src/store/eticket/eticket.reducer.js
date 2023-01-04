import { REQUEST_CHECK_IN, RESPONSE_CHECK_IN } from './eticket.types';

const initialState = {
	checkIn: null,

	processingCheckIn: false
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case REQUEST_CHECK_IN:
			return {
				...state,
				processingCheckIn: true
			};

		case RESPONSE_CHECK_IN:
			return {
				...state,
				processingCheckIn: false,
				checkIn: payload.data || null
			};

		default:
			return state;
	}
}
