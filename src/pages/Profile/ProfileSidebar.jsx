import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { RiFileListLine, RiFileList3Line } from 'react-icons/ri';
import { MdPayment } from 'react-icons/md';
import { AiOutlineSetting } from 'react-icons/ai';

const ProfileSidebar = () => {
	const sideBar = [
		{ name: 'My Order', link: '', icon: RiFileListLine, margin: true },
		{ name: 'Purchase List', link: '', icon: RiFileList3Line },
		{ name: 'My Billing', link: '', icon: MdPayment },
		{ name: 'My Account', link: '/profile/account', icon: AiOutlineSetting, margin: true }
	];

	return (
		<div className="space-y-6 p-10 ml-6">
			<form className="bg-white rounded-lg border border-solid border-gray-300 shadow-lg space-y-4 px-8 py-4 my-4">
				<div className="flex justify-start items-center space-x-4 text-primary text-xl">
					<CgProfile size={80} />
					<h1>Profile</h1>
				</div>

				<hr />

				<div className="flex flex-col relative">
					{sideBar?.map((menu, i) => (
						<Link
							to={menu?.link}
							key={i}
							className={` ${
								menu?.margin && 'mt-5'
							} flex items-center gap-3.5 py-2 text-primary hover:bg-secondary-300 rounded-md`}
						>
							<div>{React.createElement(menu?.icon, { size: '24' })}</div>
							<h2 className="whitespace-pre">{menu?.name}</h2>
						</Link>
					))}
				</div>
			</form>
		</div>
	);
};

export default ProfileSidebar;
