import React from 'react';
import GenderSelect from '@/components/molecules/Selector/GenderSelect';
import DateOfBirth from '@/components/molecules/DatePicker/BirthOfDate';

const Selected = () => {
	return (
		<div className="flex flex-col lg:flex-row items-center justify-center">
			<div className="flex space-x-4">
				<GenderSelect />
				<DateOfBirth />
			</div>
		</div>
	);
};

export default Selected;
