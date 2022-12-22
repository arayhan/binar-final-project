import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes as RoutesContainer } from 'react-router-dom';
import { AuthLayout } from './components/layouts/AuthLayout/AuthLayout';
import { MainLayout } from './components/layouts/MainLayout/MainLayout';
import { ProfileLayout } from './components/layouts/ProfileLayout/ProfileLayout';
import { PATH } from './configs/routes';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Home from './pages/Home/Home';
import ProfileMyAccount from './pages/Profile/ProfileMyAccount/ProfileMyAccount';
import ProfileMyPoints from './pages/Profile/ProfileMyPoints/ProfileMyPoints';
import ProfilePurchaseList from './pages/Profile/ProfilePurchaseList/ProfilePurchaseList';

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
			<Route element={<ProtectedRoute />}>
				<Route path={PATH.ADMIN} element={<Dashboard />} />
			</Route>

			<Route element={<AuthenticationRoute />}>
				<Route element={<AuthLayout />}>
					<Route path={PATH.LOGIN} element={<Login />} />
					<Route path={PATH.REGISTER} element={<Register />} />
				</Route>
			</Route>

			<Route element={<MainLayout />}>
				<Route path={PATH.HOME} element={<Home />} />
				<Route path={PATH.PROFILE} element={<ProfileLayout />}>
					<Route path={PATH.PROFILE} element={<ProfileMyAccount />} />
					<Route path={PATH.PROFILE_MY_ACCOUNT} element={<ProfileMyAccount />} />
					<Route path={PATH.PROFILE_PURCHASE_LIST} element={<ProfilePurchaseList />} />
					<Route path={PATH.PROFILE_MY_POINTS} element={<ProfileMyPoints />} />
				</Route>
			</Route>
		</RoutesContainer>
	);
};

export default AppRoute;
