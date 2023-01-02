import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { RiFileListLine, RiFileList3Line } from 'react-icons/ri';
import { MdPayment } from 'react-icons/md';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsChevronExpand } from 'react-icons/bs';
import { Button } from '@/components/atoms';
import { ACTION_PROFILE } from '@/store/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const menus = [
	{ label: 'My Account', link: '/profile/account', icon: AiOutlineSetting, margin: true },
	{ label: 'My Order', link: '/profile/order', icon: RiFileListLine, margin: true },
	{ label: 'Purchase List', link: '/profile/purchase', icon: RiFileList3Line },
	{ label: 'My Billing', link: '/profile/billing', icon: MdPayment }
];

export const ProfileLayout = () => {
	const [open, setOpen] = useState(true);
	const dispatch = useDispatch();

	const { actionGetProfile } = ACTION_PROFILE;

	const { profileUser, fetchingProfile } = useSelector((state) => state.profile);

	useEffect(() => {
		dispatch(
			actionGetProfile(({ success, message }) => {
				if (!success) notify.show(message, 'error');
			})
		);
	}, []);

	return (
		<div className="flex lg:flex-row w-full min-h-screen bg-secondary-100">
			<div className="flex-1 w-full">
				<div className="flex items-start justify-start">
					<Button
						className={
							'fixed lg:hidden z-90 bottom-10 right-8 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center duration-300'
						}
						variant={'primary'}
						onClick={() => setOpen(!open)}
					>
						<span className="text-white">
							<BsChevronExpand />
						</span>
					</Button>

					{fetchingProfile && <div className="w-full h-5" />}
					{!fetchingProfile && profileUser && (
						<div className="lg:mx-10 lg:my-20 lg:items-center">
							<form
								className={` ${
									open ? 'w-48 px-2 bg-primary text-white' : 'w-0 text-white'
								} h-screen lg:h-auto lg:w-72 lg:rounded-lg lg:shadow-lg space-y-4 lg:p-4 relative duration-500`}
							>
								<div className=" justify-center p-2">
									<div className={` text-white duration-200 ${!open && 'invisible'}`}>
										<h2 className="py-2 lg:text-xl">Hello,</h2>
										<h1>{profileUser?.name && <div className="text-black lg:text-xl">{profileUser.name}</div>}</h1>
									</div>
								</div>

								<hr />

								<div className={`flex flex-col relative ${!open && 'invisible'}`}>
									{menus.map((menu) => (
										<>
											<NavLink
												to={menu.link}
												key={menu.label}
												className={({ isActive }) =>
													`${menu.margin && 'mt-5'} ${
														isActive ? 'bg-primary-700 text-white' : 'text-white hover:bg-primary-400'
													} flex items-center gap-3.5 py-2 rounded-md`
												}
											>
												<div className="ml-2">{React.createElement(menu.icon, { size: '24' })}</div>
												<h2 className="whitespace-pre">{menu.label}</h2>
											</NavLink>
										</>
									))}
								</div>
							</form>
						</div>
					)}
				</div>
			</div>
			<div className="w-full bg-secondary-100 flex flex-col items-center space-y-4">
				<Outlet />
			</div>
		</div>
	);
};
