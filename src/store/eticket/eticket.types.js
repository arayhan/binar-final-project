// ==================================
// TYPES
// ==================================
export const REQUEST_CHECK_IN = 'REQUEST_CHECK_IN';
export const RESPONSE_CHECK_IN = 'RESPONSE_CHECK_IN';

// ==================================
// DISPATCHERS
// ==================================
export const requestCheckIn = () => ({
	type: REQUEST_CHECK_IN
});

export const responseCheckIn = ({ success, data, error }) => ({
	type: RESPONSE_CHECK_IN,
	payload: { success, data, error }
});
