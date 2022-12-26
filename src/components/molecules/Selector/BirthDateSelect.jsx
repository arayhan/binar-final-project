import React from 'react';
import Select from 'react-select';

const birthDateOptions = [
	{ value: '', label: '1' },
	{ value: '', label: '2' },
	{ value: '', label: '3' },
	{ value: '', label: '4' },
	{ value: '', label: '5' },
	{ value: '', label: '6' },
	{ value: '', label: '7' },
	{ value: '', label: '8' },
	{ value: '', label: '9' },
	{ value: '', label: '10' },
	{ value: '', label: '11' },
	{ value: '', label: '12' },
	{ value: '', label: '13' },
	{ value: '', label: '14' },
	{ value: '', label: '15' },
	{ value: '', label: '16' },
	{ value: '', label: '17' },
	{ value: '', label: '18' },
	{ value: '', label: '19' },
	{ value: '', label: '20' },
	{ value: '', label: '21' },
	{ value: '', label: '22' },
	{ value: '', label: '23' },
	{ value: '', label: '24' },
	{ value: '', label: '25' },
	{ value: '', label: '26' },
	{ value: '', label: '27' },
	{ value: '', label: '28' },
	{ value: '', label: '29' },
	{ value: '', label: '30' },
	{ value: '', label: '31' }
];

const BirthDateSelect = () => {
	return (
		<div>
			<h1 className="text-gray-500 text-sm pb-2">Date of Birth</h1>
			<div style={{ width: '15rem' }}>
				<Select options={birthDateOptions} placeholder="Select Date" />
			</div>
		</div>
	);
};

export default BirthDateSelect;
