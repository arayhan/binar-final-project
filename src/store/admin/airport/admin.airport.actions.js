import { objectToQueryString } from '@/utils/helpers';
import { API_ADMIN_AIRPORT } from '../../apis';
import { adminHttp as http } from '../../http';
import {
	requestCreateAdminAirport,
	requestDeleteAdminAirport,
	requestGetAdminAirportItem,
	requestGetAdminAirportList,
	requestUpdateAdminAirport,
	responseCreateAdminAirport,
	responseDeleteAdminAirport,
	responseGetAdminAirportItem,
	responseGetAdminAirportList,
	responseUpdateAdminAirport
} from './admin.airport.types';

export const actionGetAdminAirportList = (params) => async (dispatch) => {
	dispatch(requestGetAdminAirportList());

	try {
		const defaultParams = { page: 0, limit: 0 };
		const requestParams = params ? objectToQueryString({ ...defaultParams, ...params }) : objectToQueryString(defaultParams);

		const response = await http.get(API_ADMIN_AIRPORT + requestParams);

		dispatch(responseGetAdminAirportList({ success: true, data: response.data }));
	} catch (error) {
		const message = error.response.data?.message || error.message;

		dispatch(responseGetAdminAirportList({ success: false, error: message }));
	}
};

export const actionGetAdminAirportItem = (airportID) => async (dispatch) => {
	dispatch(requestGetAdminAirportItem());

	try {
		const response = await http.get(`${API_ADMIN_AIRPORT}/${airportID}`);

		dispatch(responseGetAdminAirportItem({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response.data?.message || error.message;

		dispatch(responseGetAdminAirportItem({ success: false, error: message }));
	}
};

export const actionCreateAdminAirport = (request, callback) => async (dispatch) => {
	dispatch(requestCreateAdminAirport());

	try {
		const response = await http.post(API_ADMIN_AIRPORT, request);

		if (callback) callback({ success: true, message: 'Airport Created', response: response.data });
		dispatch(responseCreateAdminAirport({ success: true, data: response.data }));
	} catch (error) {
		const message = error.response.data?.message || error.message;

		if (callback) callback({ success: false, message });
		dispatch(responseCreateAdminAirport({ success: false, error: message }));
	}
};

export const actionUpdateAdminAirport = (airportID, request, callback) => async (dispatch) => {
	dispatch(requestUpdateAdminAirport());

	try {
		const response = await http.put(`${API_ADMIN_AIRPORT}/${airportID}`, request);

		if (callback) callback({ success: true, message: 'Airport Updated', response: response.data });
		dispatch(responseUpdateAdminAirport({ success: true, data: response.data }));
	} catch (error) {
		const message = error.response.data?.message || error.message;

		if (callback) callback({ success: false, message });
		dispatch(responseUpdateAdminAirport({ success: false, error: message }));
	}
};

export const actionDeleteAdminAirport = (airportID, callback) => async (dispatch) => {
	dispatch(requestDeleteAdminAirport());

	try {
		const response = await http.delete(`${API_ADMIN_AIRPORT}/${airportID}`);

		if (callback) callback({ success: true, message: 'Airport Deleted', response: response.data });
		dispatch(responseDeleteAdminAirport({ success: true, data: response.data }));
	} catch (error) {
		const message = error.response.data?.message || error.message;

		if (callback) callback({ success: false, message });
		dispatch(responseDeleteAdminAirport({ success: false, error: message }));
	}
};
