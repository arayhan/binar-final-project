// ==================================
// TYPES
// ==================================
export const REQUEST_GET_ADMIN_AIRPORT_LIST = 'REQUEST_GET_ADMIN_AIRPORT_LIST';
export const RESPONSE_GET_ADMIN_AIRPORT_LIST = 'RESPONSE_GET_ADMIN_AIRPORT_LIST';
export const REQUEST_GET_ADMIN_AIRPORT_ITEM = 'REQUEST_GET_ADMIN_AIRPORT_ITEM';
export const RESPONSE_GET_ADMIN_AIRPORT_ITEM = 'RESPONSE_GET_ADMIN_AIRPORT_ITEM';

export const REQUEST_CREATE_ADMIN_AIRPORT = 'REQUEST_CREATE_ADMIN_AIRPORT';
export const RESPONSE_CREATE_ADMIN_AIRPORT = 'RESPONSE_CREATE_ADMIN_AIRPORT';
export const REQUEST_UPDATE_ADMIN_AIRPORT = 'REQUEST_UPDATE_ADMIN_AIRPORT';
export const RESPONSE_UPDATE_ADMIN_AIRPORT = 'RESPONSE_UPDATE_ADMIN_AIRPORT';
export const REQUEST_DELETE_ADMIN_AIRPORT = 'REQUEST_DELETE_ADMIN_AIRPORT';
export const RESPONSE_DELETE_ADMIN_AIRPORT = 'RESPONSE_DELETE_ADMIN_AIRPORT';

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

export const requestGetAdminAirportItem = () => ({
	type: REQUEST_GET_ADMIN_AIRPORT_ITEM
});

export const responseGetAdminAirportItem = ({ success, data, error }) => ({
	type: RESPONSE_GET_ADMIN_AIRPORT_ITEM,
	payload: { success, data, error }
});

export const requestCreateAdminAirport = () => ({
	type: REQUEST_CREATE_ADMIN_AIRPORT
});

export const responseCreateAdminAirport = ({ success, data, error }) => ({
	type: RESPONSE_CREATE_ADMIN_AIRPORT,
	payload: { success, data, error }
});

export const requestUpdateAdminAirport = () => ({
	type: REQUEST_UPDATE_ADMIN_AIRPORT
});

export const responseUpdateAdminAirport = ({ success, data, error }) => ({
	type: RESPONSE_UPDATE_ADMIN_AIRPORT,
	payload: { success, data, error }
});

export const requestDeleteAdminAirport = () => ({
	type: REQUEST_DELETE_ADMIN_AIRPORT
});

export const responseDeleteAdminAirport = ({ success, data, error }) => ({
	type: RESPONSE_DELETE_ADMIN_AIRPORT,
	payload: { success, data, error }
});
