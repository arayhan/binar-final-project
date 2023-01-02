import { REQUEST_GET_PROFILE, REQUEST_UPDATE_PROFILE, RESPONSE_GET_PROFILE, RESPONSE_UPDATE_PROFILE } from './profile.types';

const initialState = {
	profileUser: null,

	fetchingProfile: false,
	updateProfile: false
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case REQUEST_GET_PROFILE:
			return {
				...state,
				fetchingProfile: true
			};

		case RESPONSE_GET_PROFILE:
			return {
				...state,
				fetchingProfile: false,
				profileUser: payload.data || null
			};
		case REQUEST_UPDATE_PROFILE:
			return {
				...state,
				updateProfile: true
			};

		case RESPONSE_UPDATE_PROFILE:
			return {
				...state,
				updateProfile: false
			};

		default:
			return state;
	}
}
