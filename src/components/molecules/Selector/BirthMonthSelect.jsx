import React from 'react';
import Select from 'react-select';

const birthMonthOptions = [
	{ value: '', label: 'January' },
	{ value: '', label: 'February' },
	{ value: '', label: 'March' },
	{ value: '', label: 'April' },
	{ value: '', label: 'May' },
	{ value: '', label: 'June' },
	{ value: '', label: 'July' },
	{ value: '', label: 'August' },
	{ value: '', label: 'September' },
	{ value: '', label: 'October' },
	{ value: '', label: 'November' },
	{ value: '', label: 'December' }
];

const BirthMonthSelect = () => {
	return (
		<div>
			<h1 className="text-transparent text-sm pb-2">Month</h1>
			<div style={{ width: '15rem' }}>
				<Select options={birthMonthOptions} placeholder="Select Month" />
			</div>
		</div>
	);
};

export default BirthMonthSelect;
