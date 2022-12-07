import { GET_ALL_USERS, GET_DETAILS_USER } from './user.types';
import axios from 'axios';

export const getAllUsers = () => async (dispatch) => {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');

	dispatch({
		type: GET_ALL_USERS,
		payload: data
	});
};

export const getDetailsUser = (id) => async (dispatch) => {
	const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

	dispatch({
		type: GET_DETAILS_USER,
		payload: data
	});
};
