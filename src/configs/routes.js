export const ROUTES = {
	LOGIN: { path: '/login', name: 'Login' },
	REGISTER: { path: '/register', name: 'Register' },
	ADMIN: { path: '/admin', name: 'Admin' },

	HOME: { path: '/', name: 'Home' },
	FLIGHT: { path: '/flight', name: 'Flight' },
	BOOKING: { path: '/booking', name: 'Booking' },
	TRANSACTION: { path: '/transaction', name: 'Transaction' },
	PROFILE: { path: '/profile/account', name: 'profile' }
};

export const PATH = Object.keys(ROUTES).reduce((acc, key) => ({ ...acc, [key]: ROUTES[key].path }), {});
