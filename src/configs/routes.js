export const ROUTES = {
	HOME: { path: '/', name: 'Home' },
	LOGIN: { path: '/login', name: 'Login' },
	REGISTER: { path: '/register', name: 'Register' },

	ADMIN: { path: '/admin', name: 'Admin' }
};

export const PATH = Object.keys(ROUTES).reduce((acc, key) => ({ ...acc, [key]: ROUTES[key].path }), {});
