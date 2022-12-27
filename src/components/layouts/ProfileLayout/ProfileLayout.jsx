<<<<<<< HEAD
import React from 'react';
import ProfileSidebar from '@/pages/Profile/ProfileSidebar';
import AccountInformation from '@/pages/Profile/AccountInformation';
=======
import ProfileSidebar from '@/pages/Profile/ProfileSidebar';
import ProfileInfo from '@/pages/Profile/ProfileInfo';
>>>>>>> d1e9e6b4a0dbe229eb81bfe9ee5753491f6a4259

export const ProfileLayout = () => {
	return (
		<div className="flex lg:flex-row w-full min-h-screen bg-secondary-100">
			<div className="flex-1 w-full lg:min-h-screen py-10">
				<ProfileSidebar />
			</div>
			<div className="w-full lg:w-10/12 lg:min-h-screen bg-secondary-100 flex flex-col justify-center items-start py-20 space-y-4">
<<<<<<< HEAD
				<AccountInformation />
=======
				<ProfileInfo />
>>>>>>> d1e9e6b4a0dbe229eb81bfe9ee5753491f6a4259
			</div>
		</div>
	);
};
