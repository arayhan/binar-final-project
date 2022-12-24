import React from 'react';
import Select from 'react-select';

const birthMonthOptions = [
	{ value: 'January', label: 'January' },
	{ value: 'February', label: 'February' },
	{ value: 'March', label: 'March' },
	{ value: 'April', label: 'April' },
	{ value: 'May', label: 'May' },
	{ value: 'June', label: 'June' },
	{ value: 'July', label: 'July' },
	{ value: 'August', label: 'August' },
	{ value: 'September', label: 'September' },
	{ value: 'October', label: 'October' },
	{ value: 'November', label: 'November' },
	{ value: 'December', label: 'December' }
];

const BirthMonthSelect = () => {
	return (
		<div>
			<h1 className="text-transparent text-sm pb-2">Date of Birth</h1>
			<div className="lg:w-[15rem]">
				<Select options={birthMonthOptions} />
			</div>
		</div>
	);
};

export default BirthMonthSelect;
