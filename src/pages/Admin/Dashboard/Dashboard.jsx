import { ADMIN_NAV_OPTIONS } from '@/configs/routes';
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div className="flex flex-col items-center justify-start w-full h-full space-y-3 py-20">
			<div className="text-lg font-bold">Quick Access</div>
			<div className="grid grid-cols-4 gap-3">
				{ADMIN_NAV_OPTIONS.map((option) => (
					<Link key={option.label} className="bg-secondary hover:bg-secondary-400 p-8 rounded-md text-center" to={option.path}>
						{option.label}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
