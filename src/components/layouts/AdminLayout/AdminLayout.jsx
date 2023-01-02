import React from 'react';
import { Outlet } from 'react-router';
import { AdminMainHeader } from './AdminMainHeader/AdminMainHeader';
import { AdminMainSidebar } from './AdminMainSidebar/AdminMainSidebar';

export const AdminLayout = () => {
	return (
		<div className="flex">
			<div className="bg-primary-100 h-screen w-60">
				<AdminMainSidebar />
			</div>
			<div className="flex-1 bg-gray-100">
				<AdminMainHeader />
				<Outlet />
			</div>
		</div>
	);
};
