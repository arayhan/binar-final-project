export const APP_NAME = process.env.REACT_APP_NAME;

export const OAUTH_CLIENT_ID = process.env.REACT_APP_OAUTH_CLIENT_ID;

export const LOGIN_METHODS = {
	EMAIL: 'EMAIL',
	GOOGLE: 'GOOGLE'
};

export const PERSON_TITLE = {
	MR: 'Mr',
	MRS: 'Mrs'
};

export const STATUS_TRANSACTION = {
	UNPAID: 'unpaid',
	PENDING: 'pending',
	SETTLEMENT: 'settlement',
	CANCEL: 'cancel',
	EXPIRE: 'expire',
	REFUND: 'refund',
	FRAUD: 'fraud'
};

export const STORE_KEY = {
	USER_DATA: 'USER_DATA',
	TOKEN: 'TOKEN'
};

export const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
