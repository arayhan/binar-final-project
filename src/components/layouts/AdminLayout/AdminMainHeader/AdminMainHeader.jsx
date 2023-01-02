import { PATH } from '@/configs/routes';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaUserCircle } from 'react-icons/fa';
import { GoSignOut } from 'react-icons/go';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_ADMIN_AUTH } from '@/store/actions';
import { useState } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { RiHomeLine } from 'react-icons/ri';

export const AdminMainHeader = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { actionAdminLogout } = ACTION_ADMIN_AUTH;

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const dropdownItemClasses = 'flex items-center space-x-3 p-3 text-left hover:bg-secondary-100 text-gray-600';

	const dropdownRef = useDetectClickOutside({ onTriggered: () => setIsDropdownOpen(false) });

	const handleLogout = () => {
		dispatch(
			actionAdminLogout(() => {
				navigate(PATH.ADMIN_LOGIN);
				window.location.href = PATH.ADMIN_LOGIN;
			})
		);
	};

	return (
		<div className="bg-white shadow-md">
			<div className="container flex items-center justify-between py-4">
				<div>Terbangin</div>
				<div>
					<div className="relative z-30 flex items-center space-x-4">
						<div className="relative">
							<button
								ref={dropdownRef}
								className="flex items-center gap-2 px-6 py-3 rounded-md hover:bg-gray-100 transition-all"
								onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							>
								<FaUserCircle className="text-primary" size={22} />
								<span>Admin</span>
								<FaChevronDown className="text-gray-500" size={10} />
							</button>
							{isDropdownOpen && (
								<div className="absolute right-0 bottom-0 transform translate-y-full w-48 bg-white rounded-sm shadow-lg overflow-hidden">
									<div className="flex flex-col divide-y text-xs md:text-sm">
										<button className={dropdownItemClasses} onClick={() => navigate('/')}>
											<RiHomeLine size={18} />
											<span>Home</span>
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
		</div>
	);
};
