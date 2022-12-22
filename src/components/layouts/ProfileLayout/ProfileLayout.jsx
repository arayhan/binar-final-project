import { ROUTES } from '@/configs/routes';
import React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

export const ProfileLayout = () => {
	return (
		<div className="flex items-center p-20">
			<div className="p-8 bg-gray-200">
				<div className="flex flex-col">
					<NavLink to={ROUTES.PROFILE_MY_POINTS.path} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
						{ROUTES.PROFILE_MY_POINTS.name}
					</NavLink>
					<NavLink to={ROUTES.PROFILE_MY_ACCOUNT.path} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
						{ROUTES.PROFILE_MY_ACCOUNT.name}
					</NavLink>
					<NavLink to={ROUTES.PROFILE_PURCHASE_LIST.path} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
						{ROUTES.PROFILE_PURCHASE_LIST.name}
					</NavLink>
				</div>
			</div>
			<div className="p-8 ">
				<Outlet />
			</div>
		</div>
	);
};
