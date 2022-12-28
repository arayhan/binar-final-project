import { InputError, InputLabel, InputSelect } from '@/components/atoms';
import { PERSON_TITLE } from '@/utils/constants';
import { useState } from 'react';
import { forwardRef, useEffect } from 'react';

export const InputSelectPersonTitle = forwardRef(
	({ containerClassName, className, error, onChange, showLabel, disabled, label, placeholder, ...props }, ref) => {
		const [options, setOptions] = useState([]);

		useEffect(() => {
			const personTitle = Object.values(PERSON_TITLE);
			const mapTitle = personTitle.map((title) => ({ label: title, value: title }));
			setOptions(mapTitle);
		}, []);

		return (
			<div className={`w-full flex flex-col gap-2 ${containerClassName}`}>
				{showLabel && <InputLabel text={label} name={props.name} />}
				<InputSelect
					ref={ref}
					options={options}
					disabled={disabled}
					onChange={onChange}
					placeholder={placeholder}
					className={`${className} ${error ? 'border-red-500' : ''}'}`}
					{...props}
				/>
				{error?.message && <InputError message={error.message} />}
			</div>
		);
	}
);

InputSelectPersonTitle.displayName = 'InputSelectPersonTitle';
InputSelectPersonTitle.defaultProps = {
	name: 'personTitle',
	containerClassName: '',
	showLabel: true
};
