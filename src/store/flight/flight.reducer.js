import { REQUEST_FLIGHT_ITEM, REQUEST_FLIGHT_LIST, RESPONSE_FLIGHT_ITEM, RESPONSE_FLIGHT_LIST } from './flight.types';

const initialState = {
	flightList: null,
	flightItem: null,

	fetchingFlightList: false,
	fetchingFlightItem: false
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

		case REQUEST_FLIGHT_ITEM:
			return {
				...state,
				fetchingFlightItem: true
			};

		case RESPONSE_FLIGHT_ITEM:
			return {
				...state,
				flightItem: payload.data || null,
				fetchingFlightItem: false
			};

		default:
			return state;
	}
}
