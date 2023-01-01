// ==================================
// TYPES
// ==================================
export const REQUEST_FLIGHT_LIST = 'REQUEST_FLIGHT_LIST';
export const RESPONSE_FLIGHT_LIST = 'RESPONSE_FLIGHT_LIST';
export const REQUEST_FLIGHT_ITEM = 'REQUEST_FLIGHT_ITEM';
export const RESPONSE_FLIGHT_ITEM = 'RESPONSE_FLIGHT_ITEM';

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

export const requestFlightItem = () => ({
	type: REQUEST_FLIGHT_ITEM
});

export const responseFlightItem = ({ success, data, error }) => ({
	type: RESPONSE_FLIGHT_ITEM,
	payload: { success, data, error }
});
