import { Alert } from '@/components/atoms';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
	const { error } = useSelector((state) => state.auth);

	return (
		<div className="flex flex-col lg:flex-row items-center justify-center min-h-screen">
			<div className="flex-1 w-full bg-primary lg:min-h-screen flex items-center">
				<div className="container text-white space-y-3 lg:px-8 py-14 text-center lg:text-left">
					<div className="bg-white p-3 rounded-full inline-block shadow-lg">
						<img className="w-10" src={require('@/images/logo_terbagin_transparent.png')} alt="" />
					</div>
					<div className="text-3xl lg:text-5xl font-bold lg:leading-tight">Join us as a Terbangin member!</div>
					<div className="text-xl opacity-70">Masuk dan nikmati benefit Terbangin dengan cepat dan aman.</div>
				</div>
			</div>
			<div className="flex-1 w-full lg:w-10/12 lg:min-h-screen bg-secondary-100 flex flex-col justify-center items-center px-8 lg:px-20 py-20 space-y-4">
				{error && <Alert message={error?.message} type="error" />}

				<div className="w-full bg-white shadow-md rounded-md">
					<Outlet />
				</div>
			</div>
		</div>
	);
};
