import React from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center justify-center">
			<div className="w-full bg-primary lg:min-h-screen flex items-center">
				<div className="container text-white space-y-3 lg:px-8 py-14 text-center lg:text-left">
					<div className="bg-white p-3 rounded-full inline-block shadow-lg">
						<img className="w-10" src={require('@/images/logo_terbagin_transparent.png')} alt="" />
					</div>
					<div className="text-3xl lg:text-5xl font-bold lg:leading-tight">Join us as a Terbangin member!</div>
					<div className="text-xl opacity-70">Masuk dan nikmati benefit Terbangin dengan cepat dan aman.</div>
				</div>
			</div>
			<div className="w-full container bg-white">
				<Outlet />
			</div>
		</div>
	);
};
