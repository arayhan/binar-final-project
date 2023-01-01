import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

export const FullPageLoader = ({ text }) => {
	return (
		<div className="z-20 fixed left-0 top-0 w-full h-full bg-white bg-opacity-50">
			<div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 flex items-center space-x-3 bg-white shadow-md px-8 py-4 rounded-md">
				<BiLoaderAlt className="animate-spin" size={24} />
				{text && <span className="text-lg">{text}</span>}
			</div>
		</div>
	);
};
