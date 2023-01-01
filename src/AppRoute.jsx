import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes as RoutesContainer, useLocation } from 'react-router-dom';
import { AuthLayout } from './components/layouts/AuthLayout/AuthLayout';
import { MainLayout } from './components/layouts/MainLayout/MainLayout';
import { PATH } from './configs/routes';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Booking from './pages/Booking/Booking';
import Flight from './pages/Flight/Flight';
import Home from './pages/Home/Home';
import TransactionItem from './pages/Transaction/TransactionItem';
import TransactionList from './pages/Transaction/TransactionList';

const AppRoute = () => {
	const location = useLocation();
	const { isAuthenticated } = useSelector((state) => state.auth);

	const ProtectedRoute = () => {
		const { pathname } = location;
		const queryParam = `redirect=${pathname}`;
		return !isAuthenticated ? <Navigate to={`${PATH.LOGIN}?${queryParam}`} /> : <Outlet />;
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
				<Route path={PATH.FLIGHT} element={<Flight />} />
				<Route element={<ProtectedRoute />}>
					<Route path={PATH.BOOKING} element={<Booking />} />
					<Route path={`${PATH.BOOKING}/:bookingID`} element={<Booking />} />
					<Route path={PATH.TRANSACTION} element={<TransactionList />} />
					<Route path={`${PATH.TRANSACTION}/detail`} element={<TransactionItem />} />
					<Route path={`${PATH.TRANSACTION}/:transactionID`} element={<TransactionItem />} />
				</Route>
			</Route>
		</RoutesContainer>
	);
};

export default AppRoute;
