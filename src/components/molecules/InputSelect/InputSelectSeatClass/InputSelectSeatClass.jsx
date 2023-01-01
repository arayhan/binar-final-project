import { InputError, InputLabel, InputSelect } from '@/components/atoms';
import { forwardRef } from 'react';

export const InputSelectSeatClass = forwardRef(
	({ containerClassName, className, error, onChange, showLabel, disabled, label, placeholder, ...props }, ref) => {
		const options = [
			{ label: 'Economy', value: 'economy' },
			{ label: 'Business', value: 'business' },
			{ label: 'First Class', value: 'first-class' }
		];

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

InputSelectSeatClass.displayName = 'InputSelectSeatClass';
InputSelectSeatClass.defaultProps = {
	name: 'seatclass',
	containerClassName: '',
	showLabel: true
};
