import { forwardRef } from 'react';
import { InputError } from '../InputError/InputError';
import { InputLabel } from '../InputLabel/InputLabel';

export const InputDate = forwardRef(({ label, placeholder, minDate, maxDate, error, ...props }, ref) => {
	return (
		<div className="space-y-2 flex flex-col justify-start">
			<InputLabel text={label} name={props.name} />
			<input
				{...props}
				type="date"
				min={minDate}
				max={maxDate}
				ref={ref}
				className={`border ${
					error ? 'border-red-500' : 'border-gray-300'
				} rounded-[4px] px-3 py-[6.5px] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400 disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400`}
				placeholder={placeholder}
				id={props.name}
			/>
			{error && <InputError message={error.message} />}
		</div>
	);
});

InputDate.displayName = 'InputDate';
