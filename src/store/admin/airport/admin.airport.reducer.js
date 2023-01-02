import { REQUEST_GET_ADMIN_AIRPORT_LIST, RESPONSE_GET_ADMIN_AIRPORT_LIST } from './admin.airport.types';

const initialState = {
	airportList: null,

	fetchingAirportList: false
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case REQUEST_GET_ADMIN_AIRPORT_LIST:
			return { ...state, fetchingAirportList: true };
		case RESPONSE_GET_ADMIN_AIRPORT_LIST:
			return { ...state, airportList: payload.data, fetchingAirportList: false };

		default:
			return state;
	}
}
