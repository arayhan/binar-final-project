import { ROUTES } from '@/configs/routes';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { MainHeaderLogo } from './MainHeaderLogo';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_AUTH } from '@/store/actions';

export const MainHeader = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, isAuthenticated } = useSelector((state) => state.auth);

	const handleLogout = () => dispatch(ACTION_AUTH.authLogout(() => navigate(ROUTES.LOGIN.path)));

	return (
		<div className="bg-white shadow-md">
			<div className="container flex items-center justify-between py-4">
				<div>
					<MainHeaderLogo />
				</div>
				<div>
					<div className="flex items-center space-x-4">
						{!isAuthenticated && (
							<Link
								className="flex items-center space-x-2 border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white"
								to={ROUTES.LOGIN.path}
							>
								<FaUserCircle size={18} />
								<span>Masuk / Daftar</span>
							</Link>
						)}
						{isAuthenticated && (
							<button
								className="flex items-center space-x-2 border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white"
								onClick={handleLogout}
							>
								<FaUserCircle size={18} />
								<span>
									<span>Logout</span>
								</span>
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
