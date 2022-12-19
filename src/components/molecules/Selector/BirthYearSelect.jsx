import React from 'react';
import Select from 'react-select';

const birthYearOptions = [
	{ value: '', label: '2010' },
	{ value: '', label: '2009' },
	{ value: '', label: '2008' },
	{ value: '', label: '2007' },
	{ value: '', label: '2006' },
	{ value: '', label: '2005' },
	{ value: '', label: '2004' },
	{ value: '', label: '2003' },
	{ value: '', label: '2002' },
	{ value: '', label: '2001' },
	{ value: '', label: '2000' },
	{ value: '', label: '1999' },
	{ value: '', label: '1998' },
	{ value: '', label: '1997' },
	{ value: '', label: '1996' },
	{ value: '', label: '1995' },
	{ value: '', label: '1994' },
	{ value: '', label: '1993' },
	{ value: '', label: '1992' },
	{ value: '', label: '1991' },
	{ value: '', label: '1990' },
	{ value: '', label: '1989' },
	{ value: '', label: '1988' },
	{ value: '', label: '1987' },
	{ value: '', label: '1986' },
	{ value: '', label: '1985' },
	{ value: '', label: '1984' },
	{ value: '', label: '1983' },
	{ value: '', label: '1982' },
	{ value: '', label: '1981' },
	{ value: '', label: '1980' },
	{ value: '', label: '1979' },
	{ value: '', label: '1978' },
	{ value: '', label: '1977' },
	{ value: '', label: '1976' },
	{ value: '', label: '1975' },
	{ value: '', label: '1974' },
	{ value: '', label: '1973' },
	{ value: '', label: '1972' },
	{ value: '', label: '1971' },
	{ value: '', label: '1970' }
];

const BirthYearSelect = () => {
	return (
		<div>
			<h1 className="text-transparent text-sm pb-2">Year</h1>
			<div style={{ width: '15rem' }}>
				<Select options={birthYearOptions} placeholder="Select Year" />
			</div>
		</div>
	);
};

export default BirthYearSelect;
