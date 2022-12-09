import { Navigate, Outlet, Route, Routes as RoutesContainer } from 'react-router-dom';
import { MainLayout } from './components/layouts/MainLayout/MainLayout';
import { ROUTES } from './configs/routes';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Login from './pages/Auth/Login/Login';
import Home from './pages/Home/Home';

const AppRoute = () => {
	const isLoggedIn = false;

	const ProtectedRoute = () => {
		return !isLoggedIn ? <Navigate to="/login" replace /> : <Outlet />;
	};

	const AuthenticationRoute = () => {
		return isLoggedIn ? <Navigate to="/" replace /> : <Outlet />;
	};

	return (
		<RoutesContainer>
			<Route path={ROUTES.LOGIN.path} element={<AuthenticationRoute />}>
				<Route path={ROUTES.LOGIN.path} element={<Login />} />
			</Route>

			<Route path={ROUTES.ADMIN.path} element={<ProtectedRoute />}>
				<Route path={ROUTES.ADMIN.path} element={<Dashboard />} />
			</Route>

			<Route path={ROUTES.HOME.path} element={<MainLayout />}>
				<Route path={ROUTES.HOME.path} element={<Home />} />
			</Route>
		</RoutesContainer>
	);
};

export default AppRoute;
