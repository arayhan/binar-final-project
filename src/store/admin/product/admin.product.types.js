// ==================================
// TYPES
// ==================================
export const REQUEST_GET_ADMIN_PRODUCT_LIST = 'REQUEST_GET_ADMIN_PRODUCT_LIST';
export const RESPONSE_GET_ADMIN_PRODUCT_LIST = 'RESPONSE_GET_ADMIN_PRODUCT_LIST';
export const REQUEST_GET_ADMIN_PRODUCT_ITEM = 'REQUEST_GET_ADMIN_PRODUCT_ITEM';
export const RESPONSE_GET_ADMIN_PRODUCT_ITEM = 'RESPONSE_GET_ADMIN_PRODUCT_ITEM';

export const REQUEST_CREATE_ADMIN_PRODUCT = 'REQUEST_CREATE_ADMIN_PRODUCT';
export const RESPONSE_CREATE_ADMIN_PRODUCT = 'RESPONSE_CREATE_ADMIN_PRODUCT';
export const REQUEST_UPDATE_ADMIN_PRODUCT = 'REQUEST_UPDATE_ADMIN_PRODUCT';
export const RESPONSE_UPDATE_ADMIN_PRODUCT = 'RESPONSE_UPDATE_ADMIN_PRODUCT';
export const REQUEST_DELETE_ADMIN_PRODUCT = 'REQUEST_DELETE_ADMIN_PRODUCT';
export const RESPONSE_DELETE_ADMIN_PRODUCT = 'RESPONSE_DELETE_ADMIN_PRODUCT';

// ==================================
// DISPATCHERS
// ==================================

export const requestGetAdminProductList = () => ({
	type: REQUEST_GET_ADMIN_PRODUCT_LIST
});

export const responseGetAdminProductList = ({ success, data, error }) => ({
	type: RESPONSE_GET_ADMIN_PRODUCT_LIST,
	payload: { success, data, error }
});

export const requestGetAdminProductItem = () => ({
	type: REQUEST_GET_ADMIN_PRODUCT_ITEM
});

export const responseGetAdminProductItem = ({ success, data, error }) => ({
	type: RESPONSE_GET_ADMIN_PRODUCT_ITEM,
	payload: { success, data, error }
});

export const requestCreateAdminProduct = () => ({
	type: REQUEST_CREATE_ADMIN_PRODUCT
});

export const responseCreateAdminProduct = ({ success, data, error }) => ({
	type: RESPONSE_CREATE_ADMIN_PRODUCT,
	payload: { success, data, error }
});

export const requestUpdateAdminProduct = () => ({
	type: REQUEST_UPDATE_ADMIN_PRODUCT
});

export const responseUpdateAdminProduct = ({ success, data, error }) => ({
	type: RESPONSE_UPDATE_ADMIN_PRODUCT,
	payload: { success, data, error }
});

export const requestDeleteAdminProduct = () => ({
	type: REQUEST_DELETE_ADMIN_PRODUCT
});

export const responseDeleteAdminProduct = ({ success, data, error }) => ({
	type: RESPONSE_DELETE_ADMIN_PRODUCT,
	payload: { success, data, error }
});
