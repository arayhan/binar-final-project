import { PATH } from '@/configs/routes';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaUserCircle } from 'react-icons/fa';
import { GoSignOut } from 'react-icons/go';
import { MainHeaderLogo } from './MainHeaderLogo';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_AUTH } from '@/store/actions';
import { RiBillLine, RiHomeLine, RiUser3Line } from 'react-icons/ri';
import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';

export const MainHeader = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, isAuthenticated } = useSelector((state) => state.auth);

	const { actionLogout } = ACTION_AUTH;

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const dropdownItemClasses = 'flex items-center space-x-3 p-3 text-left hover:bg-gray-100 text-gray-600';

	const dropdownRef = useDetectClickOutside({ onTriggered: () => setIsDropdownOpen(false) });

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
					<div className="relative z-30 flex items-center space-x-4">
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
							<button
								ref={dropdownRef}
								className="flex items-center gap-2 px-6 py-3 rounded-md hover:bg-gray-100 transition-all"
								onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							>
								<FaUserCircle className="text-primary" size={22} />
								<span className="">{user ? user.name || user.username : `{{username}}`}</span>
								<FaChevronDown className="text-gray-500" size={10} />
							</button>
						)}
						{isDropdownOpen && (
							<div className="absolute right-0 bottom-0 transform translate-y-full w-48 bg-white rounded-sm shadow-lg overflow-hidden">
								<div className="flex flex-col divide-y text-xs md:text-sm">
									<button className={dropdownItemClasses} onClick={() => navigate('/')}>
										<RiHomeLine size={18} />
										<span>Home</span>
									</button>
									<button className={dropdownItemClasses} onClick={() => navigate('/')}>
										<RiUser3Line size={18} />
										<span>Profil</span>
									</button>
									<button className={dropdownItemClasses} onClick={() => navigate('/')}>
										<RiBillLine size={18} />
										<span>List Transaksi</span>
									</button>
									<button className={dropdownItemClasses} onClick={handleLogout}>
										<GoSignOut size={18} />
										<span>Logout</span>
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
