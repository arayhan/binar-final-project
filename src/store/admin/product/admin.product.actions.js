import { objectToQueryString } from '@/utils/helpers';
import { API_ADMIN_PRODUCT } from '../../apis';
import { adminHttp as http } from '../../http';
import {
	requestCreateAdminProduct,
	requestDeleteAdminProduct,
	requestGetAdminProductItem,
	requestGetAdminProductList,
	requestUpdateAdminProduct,
	responseCreateAdminProduct,
	responseDeleteAdminProduct,
	responseGetAdminProductItem,
	responseGetAdminProductList,
	responseUpdateAdminProduct
} from './admin.product.types';

export const actionGetAdminProductList = (params) => async (dispatch) => {
	dispatch(requestGetAdminProductList());

	try {
		const defaultParams = { page: 0, limit: 0 };
		const requestParams = params ? objectToQueryString({ ...defaultParams, ...params }) : objectToQueryString(defaultParams);

		const response = await http.get(API_ADMIN_PRODUCT + requestParams);

		dispatch(responseGetAdminProductList({ success: true, data: response.data }));
	} catch (error) {
		const message = error.response.data?.message || error.message;

		dispatch(responseGetAdminProductList({ success: false, error: message }));
	}
};

export const actionGetAdminProductItem = (productID) => async (dispatch) => {
	dispatch(requestGetAdminProductItem());

	try {
		const response = await http.get(`${API_ADMIN_PRODUCT}/${productID}`);

		dispatch(responseGetAdminProductItem({ success: true, data: response.data.data }));
	} catch (error) {
		const message = error.response.data?.message || error.message;

		dispatch(responseGetAdminProductItem({ success: false, error: message }));
	}
};

export const actionCreateAdminProduct = (request, callback) => async (dispatch) => {
	dispatch(requestCreateAdminProduct());

	try {
		const response = await http.post(API_ADMIN_PRODUCT, request);

		if (callback) callback({ success: true, message: 'Product Created', response: response.data });
		dispatch(responseCreateAdminProduct({ success: true, data: response.data }));
	} catch (error) {
		const message = error.response.data?.message || error.message;

		if (callback) callback({ success: false, message });
		dispatch(responseCreateAdminProduct({ success: false, error: message }));
	}
};

export const actionUpdateAdminProduct = (productID, request, callback) => async (dispatch) => {
	dispatch(requestUpdateAdminProduct());

	try {
		const response = await http.put(`${API_ADMIN_PRODUCT}/${productID}`, request);

		if (callback) callback({ success: true, message: 'Product Updated', response: response.data });
		dispatch(responseUpdateAdminProduct({ success: true, data: response.data }));
	} catch (error) {
		const message = error.response.data?.message || error.message;

		if (callback) callback({ success: false, message });
		dispatch(responseUpdateAdminProduct({ success: false, error: message }));
	}
};

export const actionDeleteAdminProduct = (productID, callback) => async (dispatch) => {
	dispatch(requestDeleteAdminProduct());

	try {
		const response = await http.delete(`${API_ADMIN_PRODUCT}/${productID}`);

		if (callback) callback({ success: true, message: 'Product Deleted', response: response.data });
		dispatch(responseDeleteAdminProduct({ success: true, data: response.data }));
	} catch (error) {
		const message = error.response.data?.message || error.message;

		if (callback) callback({ success: false, message });
		dispatch(responseDeleteAdminProduct({ success: false, error: message }));
	}
};
