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
			<div style={{ width: '20rem' }}>
				<Select options={genderOptions} placeholder="Select Gender" />
			</div>
		</div>
	);
};

export default GenderSelect;
