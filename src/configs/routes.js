export const ROUTES = {
	LOGIN: { path: '/login', name: 'Login' },
	REGISTER: { path: '/register', name: 'Register' },

	HOME: { path: '/', name: 'Home' },
	FLIGHT: { path: '/flight', name: 'Flight' },
	BOOKING: { path: '/booking', name: 'Booking' },
	PAYMENT: { path: '/payment', name: 'Payment' },

	ADMIN: { path: '/admin', name: 'Admin' }
};

export const PATH = Object.keys(ROUTES).reduce((acc, key) => ({ ...acc, [key]: ROUTES[key].path }), {});
