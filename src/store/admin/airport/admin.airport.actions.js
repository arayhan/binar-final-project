import { objectToQueryString } from '@/utils/helpers';
import { API_ADMIN_AIRPORT } from '../../apis';
import { adminHttp as http } from '../../http';
import { requestGetAdminAirportList, responseGetAdminAirportList } from './admin.airport.types';

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
