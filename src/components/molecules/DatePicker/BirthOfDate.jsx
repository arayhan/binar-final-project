import React, { useState } from 'react';

const BirthOfDate = () => {
	const [date, setDate] = useState();
	return (
		<div>
			<h1 className="text-gray-400 text-sm pb-2">Date of Birth</h1>
			<input type="date" className="border-gray-300 rounded-md lg:w-[25rem]" onChange={(e) => setDate(e.target.value)} />
		</div>
	);
};

export default BirthOfDate;
