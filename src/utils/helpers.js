export const queryStringToObject = (queryString) => {
	const pairs = queryString.substring(1).split('&');

	const array = pairs.map((el) => {
		const parts = el.split('=');
		return parts;
	});

	const isEmpty = array[0][0] === '';

	return isEmpty ? '' : Object.fromEntries(array);
};

export const objectToQueryString = (obj, isEncodeURI = false) => {
	return Object.keys(obj).reduce((str, value, i) => {
		const key = isEncodeURI ? encodeURIComponent(value) : value;
		const val = isEncodeURI ? encodeURIComponent(obj[key]) : obj[key];
		const delimiter = i === 0 ? '?' : '&';
		return [str, delimiter, key, '=', val].join('');
	}, '');
};

export const addQueryParams = (url, params) => {
	const queryObject = queryStringToObject(url);
	return objectToQueryString(url ? { ...queryObject, ...params } : params);
};

export const removeQueryParams = (url, params) => {
	const object = queryStringToObject(url);
	if (Object.keys(object).length > 0 && params in object) delete object[params];
	const result = objectToQueryString(object);
	return result;
};
