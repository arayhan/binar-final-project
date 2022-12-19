import React from 'react';
import GenderSelect from '@/components/molecules/Selector/GenderSelect';
import BirthDateSelect from '@/components/molecules/Selector/BirthDateSelect';
import BirthMonthSelect from '@/components/molecules/Selector/BirthMonthSelect';
import BirthYearSelect from '@/components/molecules/Selector/BirthYearSelect';

const Selected = () => {
	return (
		<div className="flex justify-between space-x-4">
			<GenderSelect />
			<BirthDateSelect />
			<BirthMonthSelect />
			<BirthYearSelect />
		</div>
	);
};

export default Selected;
