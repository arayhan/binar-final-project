import { forwardRef } from 'react';
import { InputError } from '../InputError/InputError';
import { InputLabel } from '../InputLabel/InputLabel';

export const InputText = forwardRef(({ label, helper, prefix, placeholder, suffix, error, showLabel, ...props }, ref) => {
	return (
		<div className="space-y-2 flex flex-col justify-start">
			{showLabel && <InputLabel text={label} name={props.name} helper={helper} />}
			<div className="flex items-center space-x-4">
				{prefix && <div>{prefix}</div>}
				<input
					{...props}
					ref={ref}
					className={`w-full border ${
						error ? 'border-red-500' : 'border-gray-300'
					} rounded-[4px] px-3 py-[7px] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400 disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400`}
					placeholder={placeholder}
					id={props.name}
				/>
				{suffix && <div>{suffix}</div>}
			</div>
			{error && <InputError message={error.message} />}
		</div>
	);
});

InputText.displayName = 'InputText';
InputText.defaultProps = {
	showLabel: true
};
