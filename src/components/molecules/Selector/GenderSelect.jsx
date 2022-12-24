import React from 'react';
import Select from 'react-select';

const genderOptions = [
	{ value: 'female', label: 'Female' },
	{ value: 'male', label: 'Male' }
];

const GenderSelect = () => {
	return (
		<div>
			<h1 className="text-gray-500 text-sm pb-2">Gender</h1>
			<div className="lg:w-[40rem]">
				<Select options={genderOptions} />
			</div>
		</div>
	);
};

export default GenderSelect;
