import { ADMIN_NAV_OPTIONS, PATH } from '@/configs/routes';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const AdminMainSidebar = () => {
	return (
		<div>
			<div className="flex flex-col items-center justify-center h-40 bg-primary">
				<div className="flex items-center justify-center rounded-full bg-white p-4">
					<img className="w-10" src={require('@/images/logo_terbagin_transparent.png')} alt="" />
				</div>
			</div>
			<div className="p-3 space-y-2">
				{ADMIN_NAV_OPTIONS.map((option) => (
					<NavLink
						key={option.label}
						end={option.path === PATH.ADMIN}
						className={({ isActive }) =>
							`inline-block p-3 ${
								isActive ? 'bg-primary text-white' : 'bg-primary-200 hover:bg-primary-300'
							} transition-all w-full rounded-md font-semibold`
						}
						to={option.path}
					>
						<span>{option.label}</span>
					</NavLink>
				))}
			</div>
		</div>
	);
};
