import { API_FLIGHT_LIST } from '../apis';
import { http } from '../http';
import { requestFlightList, responseFlightList } from './flight.types';
import { objectToQueryString } from '@/utils/helpers';

export const actionGetFlightList = (params, callback) => async (dispatch) => {
	console.log({ params });
	dispatch(requestFlightList());

	try {
		const defaultParams = {};
		const objectParams = { iata_from: params.iata_from, iata_to: params.iata_to, date: params.date_departure };
		const queryParams = objectToQueryString({ ...objectParams, ...defaultParams });
		const response = await http.get(API_FLIGHT_LIST + queryParams);

		callback({ success: true });
		dispatch(responseFlightList({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		callback({ success: false, message });
		dispatch(responseFlightList({ success: false, error: message }));
	}
};
