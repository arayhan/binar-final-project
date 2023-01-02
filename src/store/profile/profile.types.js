// ==================================
// TYPES
// ==================================
export const REQUEST_GET_PROFILE = 'REQUEST_GET_PROFILE';
export const RESPONSE_GET_PROFILE = 'RESPONSE_GET_PROFILE';
export const REQUEST_UPDATE_PROFILE = 'REQUEST_UPDATE_PROFILE';
export const RESPONSE_UPDATE_PROFILE = 'RESPONSE_UPDATE_PROFILE';
// ==================================
// DISPATCHERS
// ==================================
export const requestGetProfile = () => ({
	type: REQUEST_GET_PROFILE
});

export const responseGetProfile = ({ success, data, error }) => ({
	type: RESPONSE_GET_PROFILE,
	payload: { success, data, error }
});

export const requestUpdateProfile = () => ({
	type: REQUEST_UPDATE_PROFILE
});

export const responseUpdateProfile = ({ success, data, error }) => ({
	type: RESPONSE_UPDATE_PROFILE,
	payload: { success, data, error }
});
