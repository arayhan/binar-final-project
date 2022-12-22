export const ROUTES = {
	LOGIN: { path: '/login', name: 'Login' },
	REGISTER: { path: '/register', name: 'Register' },

	PROFILE: { path: '/profile', name: 'Profile' },
	PROFILE_MY_ACCOUNT: { path: '/profile/my-account', name: 'My Account' },
	PROFILE_PURCHASE_LIST: { path: '/profile/purchase-list', name: 'Purchase List' },
	PROFILE_MY_POINTS: { path: '/profile/my-points', name: 'My Points' },

	ADMIN: { path: '/admin', name: 'Admin' }
};

export const PATH = Object.keys(ROUTES).reduce((acc, key) => ({ ...acc, [key]: ROUTES[key].path }), {});
