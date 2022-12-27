import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes as RoutesContainer } from 'react-router-dom';
import { AuthLayout } from './components/layouts/AuthLayout/AuthLayout';
import { MainLayout } from './components/layouts/MainLayout/MainLayout';
import { ProfileLayout } from './components/layouts/ProfileLayout/ProfileLayout';
import { ROUTES } from './configs/routes';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Home from './pages/Home/Home';
import ProfileMyAccount from './pages/Profile/ProfileMyAccount/ProfileMyAccount';
import ProfilePurchaseList from './pages/Profile/ProfilePurchaseList/ProfilePurchaseList';
import ProfileMyOrder from './pages/Profile/ProfileMyOrder/ProfileMyOrder';
import ProfileMyBilling from './pages/Profile/ProfileMyBilling/ProfileMyBilling';

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
					<Route path={ROUTES.REGISTER.path} element={<Register />} />
				</Route>
			</Route>

			<Route element={<ProtectedRoute />}>
				<Route path={ROUTES.ADMIN.path} element={<Dashboard />} />
			</Route>

			<Route element={<MainLayout />}>
				<Route path={ROUTES.HOME.path} element={<Home />} />
			</Route>

			<Route element={<ProfileLayout />}>
				<Route path={ROUTES.PROFILE.path} element={<ProfileMyAccount />} />
				<Route path={ROUTES.PROFILE_MY_ACCOUNT.path} element={<ProfileMyAccount />} />
				<Route path={ROUTES.PROFILE_PURCHASE_LIST.path} element={<ProfilePurchaseList />} />
				<Route path={ROUTES.PROFILE_MY_ORDER.path} element={<ProfileMyOrder />} />
				<Route path={ROUTES.PROFILE_MY_BILLING.path} element={<ProfileMyBilling />} />
			</Route>
		</RoutesContainer>
	);
};

export default AppRoute;
