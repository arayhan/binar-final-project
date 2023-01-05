import {
	REQUEST_GET_ADMIN_AIRPORT_ITEM,
	REQUEST_GET_ADMIN_AIRPORT_LIST,
	RESPONSE_GET_ADMIN_AIRPORT_ITEM,
	RESPONSE_GET_ADMIN_AIRPORT_LIST
} from './admin.airport.types';

const initialState = {
	airportList: null,
	airportItem: null,

	fetchingAirportItem: false,
	fetchingAirportList: false,

	processingCreateAirport: false,
	processingUpdateAirport: false,
	processingDeleteAirport: false,

	errorsAirport: null
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case REQUEST_GET_ADMIN_AIRPORT_LIST:
			return { ...state, fetchingAirportList: true };
		case RESPONSE_GET_ADMIN_AIRPORT_LIST:
			return { ...state, airportList: payload.data, fetchingAirportList: false };

		case REQUEST_GET_ADMIN_AIRPORT_ITEM:
			return { ...state, fetchingAirportItem: true };
		case RESPONSE_GET_ADMIN_AIRPORT_ITEM:
			return { ...state, airportItem: payload.data, fetchingAirportItem: false };

		default:
			return state;
	}
}
