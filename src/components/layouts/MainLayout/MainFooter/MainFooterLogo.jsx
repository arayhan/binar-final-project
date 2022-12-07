import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/configs/routes';
import { APP_NAME } from '@/utils/constants';

export const MainFooterLogo = () => {
	return (
		<Link to={ROUTES.HOME.path} className="flex items-center space-x-2">
			<img className="w-10" src={require('@/images/logo_terbagin_transparent.png')} alt="" />
			<div className="text-lg text-white">{APP_NAME}</div>
		</Link>
	);
};
