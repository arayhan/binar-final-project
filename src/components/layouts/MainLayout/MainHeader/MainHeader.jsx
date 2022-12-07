import { ROUTES } from '@/configs/routes';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { MainHeaderLogo } from './MainHeaderLogo';

export const MainHeader = () => {
	return (
		<div className="bg-white">
			<div className="container flex items-center justify-between py-3">
				<div>
					<MainHeaderLogo />
				</div>
				<div>
					<div className="flex items-center space-x-4">
						<Link
							className="flex items-center space-x-2 border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white"
							to={ROUTES.LOGIN.path}
						>
							<FaUserCircle size={18} />
							<span>Masuk / Daftar</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
