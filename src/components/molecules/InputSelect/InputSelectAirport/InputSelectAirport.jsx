import { InputError, InputLabel, InputSelect } from '@/components/atoms';
import { ACTION_AIRPORT } from '@/store/actions';
import { useState, forwardRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const InputSelectAirport = forwardRef(
	({ containerClassName, className, error, onChange, showLabel, disabled, label, placeholder, params, ...props }, ref) => {
		const dispatch = useDispatch();

		const { actionGetAirportList } = ACTION_AIRPORT;

		const { airportList, fetchingAirportList } = useSelector((state) => state.airport);

		const [options, setOptions] = useState([]);

		useEffect(() => {
			dispatch(actionGetAirportList(params ? { ...params } : {}));
		}, [params]);

		useEffect(() => {
			if (airportList?.length > 0) {
				const mapAirport = airportList.map((airport) => ({ label: `${airport.city} (${airport.iata})`, value: airport.iata }));
				onChange(mapAirport[0]);
				setOptions(mapAirport);
			}
		}, [airportList]);

		return (
			<div className={`w-full flex flex-col gap-2 ${containerClassName}`}>
				{showLabel && <InputLabel text={label} name={props.name} />}
				<InputSelect
					ref={ref}
					options={options}
					loading={fetchingAirportList}
					disabled={disabled || fetchingAirportList}
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

InputSelectAirport.displayName = 'InputSelectAirport';
InputSelectAirport.defaultProps = {
	name: 'airport',
	params: {},
	containerClassName: '',
	onChange: () => {},
	showLabel: true
};
