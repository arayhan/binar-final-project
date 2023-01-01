import React from 'react';
import InputSelectGender from '@/components/molecules/InputSelect/InputSelectGender/InputSelectGender';
import InputSelectBirthofDate from '@/components/molecules/InputSelect/InputSelectBirthDate/InputSelectBirthDate';

const Selected = () => {
	return (
		<div className="flex flex-col lg:flex-row w-full lg:space-x-4">
			<div className="flex-1 w-full">
				<InputSelectGender />
			</div>
			<div className="w-full">
				<InputSelectBirthofDate />
			</div>
		</div>
	);
};

export default Selected;
