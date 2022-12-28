import React from 'react';

export const InputLabel = ({ className, text, helper, name }) => {
	return (
		<label htmlFor={name} className={`space-x-1 ${className}`}>
			<span className="font-semibold text-gray-500">{text}</span>
			{helper && <span className="text-xs text-gray-400">({helper})</span>}
		</label>
	);
};

InputLabel.displayName = 'InputLabel';
InputLabel.defaultProps = {
	className: '',
	helper: null
};
