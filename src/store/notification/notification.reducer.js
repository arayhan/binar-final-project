import { REQUEST_NOTIFICATION_LIST, RESPONSE_NOTIFICATION_LIST } from './notification.types';

const initialState = {
	notificationList: [],

	fetchingNotificationList: false
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case REQUEST_NOTIFICATION_LIST:
			return {
				...state,
				fetchingNotificationList: true
			};

		case RESPONSE_NOTIFICATION_LIST:
			return {
				...state,
				notificationList: payload.data || [],
				fetchingNotificationList: false
			};

		default:
			return state;
	}
}
