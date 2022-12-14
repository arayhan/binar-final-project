import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '@/configs/routes';
import { APP_NAME } from '@/utils/constants';

export const MainHeaderLogo = () => {
	return (
		<Link to={PATH.HOME} className="flex items-center space-x-2">
			<img className="w-12" src={require('@/images/logo_terbagin_transparent.png')} alt="" />
			<div className="text-xl text-primary">{APP_NAME}</div>
		</Link>
	);
};
