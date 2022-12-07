import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainHeader } from './MainHeader/MainHeader';

export const MainLayout = () => {
	return (
		<div>
			<MainHeader />

			<Outlet />
		</div>
	);
};
