// ==================================
// TYPES
// ==================================
export const REQUEST_FLIGHT_LIST = 'REQUEST_FLIGHT_LIST';
export const RESPONSE_FLIGHT_LIST = 'RESPONSE_FLIGHT_LIST';

// ==================================
// DISPATCHERS
// ==================================
export const requestFlightList = () => ({
	type: REQUEST_FLIGHT_LIST
});

export const responseFlightList = ({ success, data, error }) => ({
	type: RESPONSE_FLIGHT_LIST,
	payload: { success, data, error }
});
