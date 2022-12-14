import { STORE_KEY } from '@/utils/constants';
import axios from 'axios';
import store from 'store';

const getHeaders = () => {
	const token = store.get(STORE_KEY.TOKEN);
	const headers = { 'Content-Type': 'application/json' };
	return token ? { ...headers, Authorization: token } : headers;
};

const getAdminHeaders = () => {
	const token = store.get(STORE_KEY.ADMIN_TOKEN);
	const headers = { 'Content-Type': 'application/json' };
	return token ? { ...headers, Authorization: token } : headers;
};

const http = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
	headers: getHeaders()
});

const adminHttp = axios.create({
	baseURL: process.env.REACT_APP_API_BASE_URL,
	headers: getAdminHeaders()
});

export { http, adminHttp };
