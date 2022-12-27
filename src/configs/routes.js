export const ROUTES = {
	HOME: { path: '/', name: 'Home' },
	LOGIN: { path: '/login', name: 'Login' },
	REGISTER: { path: '/register', name: 'Register' },
	ADMIN: { path: '/admin', name: 'Admin' },
	PROFILE: { path: '/profile/account', name: 'Profile' },
	PROFILE_MY_ACCOUNT: { path: '/profile/account', name: 'Profile account' },
	PROFILE_MY_ORDER: { path: '/profile/order', name: 'Profile order' },
	PROFILE_PURCHASE_LIST: { path: '/profile/purchase', name: 'Profile purchase list' },
	PROFILE_MY_BILLING: { path: '/profile/billing', name: 'Profile billing' }
};

export const PATH = Object.keys(ROUTES).reduce((acc, key) => ({ ...acc, [key]: ROUTES[key].path }), {});
