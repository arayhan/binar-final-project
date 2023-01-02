// ==================================
// TYPES
// ==================================
export const REQUEST_NOTIFICATION_LIST = 'REQUEST_NOTIFICATION_LIST';
export const RESPONSE_NOTIFICATION_LIST = 'RESPONSE_NOTIFICATION_LIST';

// ==================================
// DISPATCHERS
// ==================================
export const requestNotificationList = () => ({
	type: REQUEST_NOTIFICATION_LIST
});

export const responseNotificationList = ({ success, data, error }) => ({
	type: RESPONSE_NOTIFICATION_LIST,
	payload: { success, data, error }
});
