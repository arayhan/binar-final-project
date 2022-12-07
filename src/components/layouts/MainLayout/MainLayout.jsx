import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainFooter } from './MainFooter/MainFooter';
import { MainHeader } from './MainHeader/MainHeader';

export const MainLayout = () => {
	return (
		<div>
			<MainHeader />
			<Outlet />
			<MainFooter />
		</div>
	);
};
