import React, { forwardRef } from 'react';
import ReactSelect from 'react-select';
import './InputSelect.css';

export const InputSelect = forwardRef(
	({ options, value, isLoading, isMulti, isError, isSearchable, isClearable, disabled, onChange, placeholder, ...props }, ref) => {
		return (
			<ReactSelect
				{...props}
				ref={ref}
				value={options.filter(function (option) {
					return option.value === value;
				})}
				className={`z-10 text-[1.1rem] ${props.className}`}
				placeholder={placeholder}
				onChange={onChange}
				isMulti={isMulti}
				isSearchable={isSearchable}
				isLoading={isLoading}
				isDisabled={disabled}
				isClearable={isClearable}
				styles={{
					control: (provided) => ({
						...provided,
						borderSize: '1px',
						borderStyle: 'solid',
						borderColor: isError ? '#F56565' : '#E2E8F0',
						boxShadow: 'none'
					}),
					input: (provided) => ({
						...provided,
						'input:focus': {
							boxShadow: 'none',
							zIndex: 20
						}
					}),
					menu: (styles) => ({ ...styles, zIndex: 30, fontSize: '1.1rem' }),
					menuPortal: (styles) => ({ ...styles, zIndex: 30 })
				}}
				menuPortalTarget={document.body}
				options={options}
			/>
		);
	}
);

InputSelect.displayName = 'InputSelect';
InputSelect.defaultProps = {
	isSearchable: true
};
