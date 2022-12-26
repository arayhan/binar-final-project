import { API_FLIGHT_LIST } from '../apis';
import { http } from '../http';
import { requestFlightList, responseFlightList } from './flight.types';
import { objectToQueryString } from '@/utils/helpers';

export const actionGetFlightList = (values, callback) => async (dispatch) => {
	dispatch(requestFlightList());

	try {
		const defaultParams = {};
		const params = { iata_from: values.iata_from, iata_to: values.iata_to, date: values.date_departure };
		const queryParams = objectToQueryString({ ...params, ...defaultParams });
		const response = await http.get(API_FLIGHT_LIST + queryParams);

		callback({ success: true });
		dispatch(responseFlightList({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response?.data?.message || error.message;

		callback({ success: false, message });
		dispatch(responseFlightList({ success: false, error: message }));
	}
};
