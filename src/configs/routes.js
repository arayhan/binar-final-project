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
	ADMIN_LOGIN: { path: '/admin/login', name: 'Admin Login' },
	ADMIN_AIRPORT: { path: '/admin/airport', name: 'Admin Airport' },
	ADMIN_PRODUCT: { path: '/admin/product', name: 'Admin Product' },
	ADMIN_AIRLINE: { path: '/admin/airline', name: 'Admin Airline' },
	ADMIN_AIRPLANE: { path: '/admin/airplane', name: 'Admin Airplane' },
	ADMIN_TRANSACTION: { path: '/admin/transaction', name: 'Admin Transaction' },
	ADMIN_NOTIFICATION: { path: '/admin/notification', name: 'Admin Notification' }
};

export const PATH = Object.keys(ROUTES).reduce((acc, key) => ({ ...acc, [key]: ROUTES[key].path }), {});

export const ADMIN_NAV_OPTIONS = [
	{ label: 'Dashboard', path: PATH.ADMIN },
	{ label: 'Airport', path: PATH.ADMIN_AIRPORT },
	{ label: 'Product', path: PATH.ADMIN_PRODUCT },
	{ label: 'Airline', path: PATH.ADMIN_AIRLINE },
	{ label: 'Airplane', path: PATH.ADMIN_AIRPLANE }
];
