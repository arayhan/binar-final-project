import React from 'react';

export const InputLabel = ({ className, text, name }) => {
	return (
		<label htmlFor={name} className={`font-semibold text-gray-500 ${className}`}>
			{text}
		</label>
	);
};
