import moment from 'moment';

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

export const formatRupiah = (angka) => {
	var number_string = angka
			.toString()
			.replace(/[^,\d]/g, '')
			.toString(),
		split = number_string.split(','),
		sisa = split[0].length % 3,
		rupiah = split[0].substr(0, sisa),
		ribuan = split[0].substr(sisa).match(/\d{3}/gi);

	if (ribuan) {
		const separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.');
	}

	rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
	return 'Rp. ' + rupiah;
};

export const isPDF = (file) => file.type.indexOf('pdf') > -1;
export const isImage = (file) => file.type.indexOf('image') > -1;

export const setMaxDateOfBirth = (maxYear = 17) => {
	const date = new Date();
	date.setFullYear(date.getFullYear() - maxYear);
	return moment(date).format('YYYY-MM-DD');
};
