// ==================================
// TYPES
// ==================================
export const REQUEST_GET_ADMIN_AIRPORT_LIST = 'REQUEST_GET_ADMIN_AIRPORT_LIST';
export const RESPONSE_GET_ADMIN_AIRPORT_LIST = 'RESPONSE_GET_ADMIN_AIRPORT_LIST';

export const REQUEST_GET_ADMIN_AIRPORT_ITEM = 'REQUEST_GET_ADMIN_AIRPORT_ITEM';
export const RESPONSE_GET_ADMIN_AIRPORT_ITEM = 'RESPONSE_GET_ADMIN_AIRPORT_ITEM';

// ==================================
// DISPATCHERS
// ==================================

export const requestGetAdminAirportList = () => ({
	type: REQUEST_GET_ADMIN_AIRPORT_LIST
});

export const responseGetAdminAirportList = ({ success, data, error }) => ({
	type: RESPONSE_GET_ADMIN_AIRPORT_LIST,
	payload: { success, data, error }
});
