import { useState } from 'react';
import { BiCalendarCheck } from 'react-icons/bi';
import { RiContactsBookUploadFill } from 'react-icons/ri';
import { CardCheckIn } from '../../Card/CardCheckIn/CardCheckIn';
import { CardFormSearchFlights } from '../../Card/CardFormSearchFlights/CardFormSearchFlights';

export const BannerHome = () => {
	const MENU = {
		BOOK: { label: 'Book', icon: <RiContactsBookUploadFill size={36} /> },
		CHECKIN: { label: 'Check-In', icon: <BiCalendarCheck size={36} /> }
	};
	const MENU_OPTIONS = Object.values(MENU);

	const [activeMenu, setActiveMenu] = useState(MENU.BOOK);

	return (
		<div className="bg-[url('@/images/pictures/pulau_padar.jpg')] bg-slate-100 bg-fixed bg-no-repeat bg-cover bg-bottom bg-blend-multiply filter grayscale-[0.3]">
			<div className="container py-32">
				<div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-12">
					<div className="max-w-screen-sm">
						{activeMenu.label === MENU.BOOK.label && <CardFormSearchFlights />}
						{activeMenu.label === MENU.CHECKIN.label && <CardCheckIn />}
					</div>

					<div className="lg:w-1/3 grid grid-cols-2 gap-10">
						{MENU_OPTIONS.map((menu) => (
							<button
								key={menu.label}
								className={`w-full px-16 bg-white py-8 hover:opacity-100 outline-2 outline-dashed transition-all outline-offset-4 text-center shadow-md flex flex-col items-center justify-center rounded-md gap-3 text-xl font-semibold text-primary ${
									activeMenu.label === menu.label ? 'outline-white' : 'outline-transparent opacity-70'
								}`}
								onClick={() => setActiveMenu(menu)}
							>
								<span>{menu.icon}</span>
								<span>{menu.label}</span>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
