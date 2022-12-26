import { PATH } from '@/configs/routes';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaUserCircle } from 'react-icons/fa';
import { MainHeaderLogo } from './MainHeaderLogo';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_AUTH } from '@/store/actions';

export const MainHeader = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, isAuthenticated } = useSelector((state) => state.auth);

	const { actionLogout } = ACTION_AUTH;

	const handleLogout = () =>
		dispatch(
			actionLogout(() => {
				navigate(PATH.LOGIN);
				window.location.href = '/login';
			})
		);

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
								className="flex items-center gap-3 border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white"
								to={PATH.LOGIN}
							>
								<FaUserCircle size={22} />
								<span>Masuk / Daftar</span>
							</Link>
						)}
						{isAuthenticated && (
							<button className="flex items-center gap-2 px-6 py-3 rounded-md hover:bg-gray-100 transition-all" onClick={handleLogout}>
								<FaUserCircle className="text-primary" size={22} />
								<span className="">{user ? user.name || user.username : `{{username}}`}</span>
								<FaChevronDown className="text-gray-500" size={10} />
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
