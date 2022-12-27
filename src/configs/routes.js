export const ROUTES = {
	HOME: { path: '/', name: 'Home' },
	LOGIN: { path: '/login', name: 'Login' },
	REGISTER: { path: '/register', name: 'Register' },
	ADMIN: { path: '/admin', name: 'Admin' },
	PROFILE: { path: '/profile/account', name: 'Profile' },
	PROFILE_MY_ACCOUNT: { path: '/profile/account', name: 'Profile Account' },
	PROFILE_PURCHASE_LIST: { path: '/profile/purchase', name: 'Profile Purchase' },
	PROFILE_MY_ORDER: { path: '/profile/order', name: 'Profile Order' },
	PROFILE_MY_BILLING: { path: '/profile/billing', name: 'Profile Billing' }
};

export const PATH = Object.keys(ROUTES).reduce((acc, key) => ({ ...acc, [key]: ROUTES[key].path }), {});
