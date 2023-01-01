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

export const TRANSACTION_STATUS = {
	All: {
		label: 'Semua',
		value: ''
	},
	UNPAID: {
		label: 'Unpaid',
		value: 'unpaid'
	},
	PENDING: {
		label: 'Pending',
		value: 'pending'
	},
	SETTLEMENT: {
		label: 'Settlement',
		value: 'settlement'
	},
	CANCEL: {
		label: 'Cancel',
		value: 'cancel'
	},
	EXPIRE: {
		label: 'Expire',
		value: 'expire'
	},
	REFUND: {
		label: 'Refund',
		value: 'refund'
	},
	FRAUD: {
		label: 'Fraud',
		value: 'fraud'
	}
};

export const TRANSACTION_STATUS_OPTIONS = Object.values(TRANSACTION_STATUS);

export const STORE_KEY = {
	USER_DATA: 'USER_DATA',
	TOKEN: 'TOKEN'
};

export const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
