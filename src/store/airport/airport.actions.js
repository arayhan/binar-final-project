import { API_AIRPORT_LIST } from '../apis';
import { http } from '../http';
import { REQUEST_GET_AIRPORT_LIST, RESPONSE_GET_AIRPORT_LIST } from './airport.types';

// ==================================
// DISPATCHERS
// ==================================
const requestGetAirportList = () => ({
	type: REQUEST_GET_AIRPORT_LIST
});

const responseGetAirportList = ({ success, data, error }) => ({
	type: RESPONSE_GET_AIRPORT_LIST,
	payload: { success, data, error }
});

// ==================================
// ACTIONS
// ==================================
export const actionGetAirportList = (params) => async (dispatch) => {
	dispatch(requestGetAirportList());

	try {
		const defaultParams = { page: 0, limit: 0 };
		const requestParams = params ? { ...defaultParams, ...params } : defaultParams;
		const response = await http.get(API_AIRPORT_LIST, requestParams);

		dispatch(responseGetAirportList({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response.data?.message || error.message;

		dispatch(responseGetAirportList({ success: false, error: message }));
	}
};
