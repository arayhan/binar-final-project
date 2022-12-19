import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes as RoutesContainer } from 'react-router-dom';
import { AuthLayout } from './components/layouts/AuthLayout/AuthLayout';
import { MainLayout } from './components/layouts/MainLayout/MainLayout';
import { ROUTES } from './configs/routes';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Login from './pages/Auth/Login/Login';
import Home from './pages/Home/Home';

const AppRoute = () => {
	const { isAuthenticated } = useSelector((state) => state.auth);

	const ProtectedRoute = () => {
		return !isAuthenticated ? <Navigate to="/login" replace /> : <Outlet />;
	};

	const AuthenticationRoute = () => {
		return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
	};

	return (
		<RoutesContainer>
			<Route element={<AuthenticationRoute />}>
				<Route element={<AuthLayout />}>
					<Route path={ROUTES.LOGIN.path} element={<Login />} />
				</Route>
			</Route>

			<Route element={<ProtectedRoute />}>
				<Route path={ROUTES.ADMIN.path} element={<Dashboard />} />
			</Route>

			<Route element={<MainLayout />}>
				<Route path={ROUTES.HOME.path} element={<Home />} />
			</Route>
		</RoutesContainer>
	);
};

export default AppRoute;
