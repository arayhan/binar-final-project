import {
	REQUEST_GET_ADMIN_PRODUCT_ITEM,
	REQUEST_GET_ADMIN_PRODUCT_LIST,
	RESPONSE_GET_ADMIN_PRODUCT_ITEM,
	RESPONSE_GET_ADMIN_PRODUCT_LIST
} from './admin.product.types';

const initialState = {
	productList: null,
	productItem: null,

	fetchingProductItem: false,
	fetchingProductList: false,

	processingCreateProduct: false,
	processingUpdateProduct: false,
	processingDeleteProduct: false,

	errorsProduct: null
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case REQUEST_GET_ADMIN_PRODUCT_LIST:
			return { ...state, fetchingProductList: true };
		case RESPONSE_GET_ADMIN_PRODUCT_LIST:
			return { ...state, productList: payload.data, fetchingProductList: false };

		case REQUEST_GET_ADMIN_PRODUCT_ITEM:
			return { ...state, fetchingProductItem: true };
		case RESPONSE_GET_ADMIN_PRODUCT_ITEM:
			return { ...state, productItem: payload.data, fetchingProductItem: false };

		default:
			return state;
	}
}
