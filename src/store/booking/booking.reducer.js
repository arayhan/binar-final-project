import { REQUEST_SAVE_BOOKING_TEMP_DATA } from './booking.types';

const initialState = {
	bookingTempData: null
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case REQUEST_SAVE_BOOKING_TEMP_DATA:
			return {
				...state,
				bookingTempData: payload.data
			};

		default:
			return state;
	}
}
