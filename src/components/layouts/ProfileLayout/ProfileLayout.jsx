import ProfileSidebar from '@/pages/Profile/ProfileSidebar';
import ProfileInfo from '@/pages/Profile/ProfileInfo';

export const ProfileLayout = () => {
	return (
		<div className="flex lg:flex-row w-full min-h-screen bg-secondary-100">
			<div className="flex-1 w-full lg:min-h-screen py-10">
				<ProfileSidebar />
			</div>
			<div className="w-full lg:w-10/12 lg:min-h-screen bg-secondary-100 flex flex-col justify-center items-start py-20 space-y-4">
				<ProfileInfo />
			</div>
		</div>
	);
};
