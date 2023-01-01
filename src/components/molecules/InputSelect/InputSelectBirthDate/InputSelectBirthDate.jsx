import React, { useState } from 'react';

const InputSelectBirthOfDate = () => {
	const [date, setDate] = useState();
	return (
		<div>
			<h1 className="text-gray-400 text-sm pb-2 pt-4 lg:pt-0">Date of Birth</h1>
			<input type="date" value={date} className="border-gray-300 rounded-md w-full lg:w-[25rem]" onChange={(e) => setDate(e.target.value)} />
		</div>
	);
};

export default InputSelectBirthOfDate;
