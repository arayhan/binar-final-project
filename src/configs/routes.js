export const ROUTES = {
	LOGIN: { path: '/login', name: 'Login' },
	REGISTER: { path: '/register', name: 'Register' },

	PROFILE: { path: '/profile', name: 'Profile' },
	PROFILE_MY_ACCOUNT: { path: '/profile/account', name: 'Profile Account' },
	PROFILE_PURCHASE_LIST: { path: '/profile/purchase', name: 'Profile Purchase' },
	PROFILE_MY_ORDER: { path: '/profile/order', name: 'Profile Order' },
	PROFILE_MY_BILLING: { path: '/profile/billing', name: 'Profile Billing' },

	HOME: { path: '/', name: 'Home' },
	FLIGHT: { path: '/flight', name: 'Flight' },
	BOOKING: { path: '/booking', name: 'Booking' },
	TRANSACTION: { path: '/transaction', name: 'Transaction' },

	ADMIN: { path: '/admin', name: 'Admin' },
	ADMIN_LOGIN: { path: '/admin/login', name: 'Login Admin' }
};

export const PATH = Object.keys(ROUTES).reduce((acc, key) => ({ ...acc, [key]: ROUTES[key].path }), {});
