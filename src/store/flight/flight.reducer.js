import { REQUEST_FLIGHT_LIST, RESPONSE_FLIGHT_LIST } from './flight.types';

const initialState = {
	flightList: null,

	fetchingFlightList: false
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case REQUEST_FLIGHT_LIST:
			return {
				...state,
				fetchingFlightList: true
			};

		case RESPONSE_FLIGHT_LIST:
			return {
				...state,
				flightList: payload.data || null,
				fetchingFlightList: false
			};

		default:
			return state;
	}
}
