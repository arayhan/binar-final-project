import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes as RoutesContainer, useLocation } from 'react-router-dom';
import { AuthLayout } from './components/layouts/AuthLayout/AuthLayout';
import { AdminLayout } from './components/layouts/AdminLayout/AdminLayout';
import { MainLayout } from './components/layouts/MainLayout/MainLayout';
import { ProfileLayout } from './components/layouts/ProfileLayout/ProfileLayout';
import { PATH } from './configs/routes';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Booking from './pages/Booking/Booking';
import Flight from './pages/Flight/Flight';
import Home from './pages/Home/Home';
import ProfileMyAccount from './pages/Profile/ProfileMyAccount/ProfileMyAccount';
import ProfilePurchaseList from './pages/Profile/ProfilePurchaseList/ProfilePurchaseList';
import ProfileMyOrder from './pages/Profile/ProfileMyOrder/ProfileMyOrder';
import ProfileMyBilling from './pages/Profile/ProfileMyBilling/ProfileMyBilling';
import TransactionItem from './pages/Transaction/TransactionItem';
import TransactionList from './pages/Transaction/TransactionList';
import AdminLogin from './pages/Admin/Auth/AdminLogin/AdminLogin';
import AdminAirport from './pages/Admin/Airport/AdminAirport';
import AdminAirportForm from './pages/Admin/Airport/AdminAirportForm';
import AdminProduct from './pages/Admin/Product/AdminProduct';
import AdminProductForm from './pages/Admin/Product/AdminProductForm';

const AppRoute = () => {
	const location = useLocation();
	const { isAuthenticated } = useSelector((state) => state.auth);
	const { isAdminAuthenticated } = useSelector((state) => state.admin_auth);

	const ProtectedRoute = () => {
		const { pathname } = location;
		const queryParam = `redirect=${pathname}`;
		return !isAuthenticated ? <Navigate to={`${PATH.LOGIN}?${queryParam}`} /> : <Outlet />;
	};

	const AuthenticationRoute = () => {
		return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
	};

	const AdminRoute = () => {
		return !isAdminAuthenticated ? <Navigate to={`${PATH.ADMIN_LOGIN}`} /> : <Outlet />;
	};

	const AdminAuthenticationRoute = () => {
		return isAdminAuthenticated ? <Navigate to={PATH.ADMIN} replace /> : <Outlet />;
	};

	return (
		<RoutesContainer>
			<Route element={<AdminRoute />}>
				<Route element={<AdminLayout />}>
					<Route path={`${PATH.ADMIN_AIRPORT}/update/:airportID`} element={<AdminAirportForm />} />
					<Route path={`${PATH.ADMIN_AIRPORT}/create`} element={<AdminAirportForm />} />
					<Route path={PATH.ADMIN_AIRPORT} element={<AdminAirport />} />
					<Route path={`${PATH.ADMIN_PRODUCT}/update/:productID`} element={<AdminProductForm />} />
					<Route path={`${PATH.ADMIN_PRODUCT}/create`} element={<AdminProductForm />} />
					<Route path={PATH.ADMIN_PRODUCT} element={<AdminProduct />} />
					<Route path={PATH.ADMIN_AIRLINE} element={<Dashboard />} />
					<Route path={PATH.ADMIN_AIRPLANE} element={<Dashboard />} />
					<Route path={PATH.ADMIN_TRANSACTION} element={<Dashboard />} />
					<Route path={PATH.ADMIN_NOTIFICATION} element={<Dashboard />} />
					<Route path={PATH.ADMIN} element={<Dashboard />} />
				</Route>
			</Route>

			<Route element={<AdminAuthenticationRoute />}>
				<Route path={PATH.ADMIN_LOGIN} element={<AdminLogin />} />
			</Route>

			<Route element={<AuthenticationRoute />}>
				<Route element={<AuthLayout />}>
					<Route path={PATH.LOGIN} element={<Login />} />
					<Route path={PATH.REGISTER} element={<Register />} />
				</Route>
			</Route>

			<Route element={<MainLayout />}>
				<Route path={PATH.HOME} element={<Home />} />
				<Route path={PATH.FLIGHT} element={<Flight />} />
				<Route element={<ProtectedRoute />}>
					<Route path={PATH.BOOKING} element={<Booking />} />
					<Route path={`${PATH.BOOKING}/:bookingID`} element={<Booking />} />
					<Route path={PATH.TRANSACTION} element={<TransactionList />} />
					<Route path={`${PATH.TRANSACTION}/detail`} element={<TransactionItem />} />
					<Route path={`${PATH.TRANSACTION}/:transactionID`} element={<TransactionItem />} />

					<Route element={<ProfileLayout />}>
						<Route path={PATH.PROFILE} element={<ProfileMyAccount />} />
						<Route path={PATH.PROFILE_MY_ACCOUNT} element={<ProfileMyAccount />} />
						<Route path={PATH.PROFILE_PURCHASE_LIST} element={<ProfilePurchaseList />} />
						<Route path={PATH.PROFILE_MY_ORDER} element={<ProfileMyOrder />} />
						<Route path={PATH.PROFILE_MY_BILLING} element={<ProfileMyBilling />} />
					</Route>
				</Route>
			</Route>
		</RoutesContainer>
	);
};

export default AppRoute;
