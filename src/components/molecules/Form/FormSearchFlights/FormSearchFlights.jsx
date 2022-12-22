import React, { Fragment, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { InputSelectAirport } from '../../InputSelect/InputSelectAirport/InputSelectAirport';
import { yupResolver } from '@hookform/resolvers/yup';
import { searchFlightsSchema } from '@/utils/validation-schema';

export const FormSearchFlights = () => {
	const { control, getValues, setValue, setError, handleSubmit } = useForm({
		defaultValues: {
			iata_from: '',
			iata_to: ''
		},
		resolver: yupResolver(searchFlightsSchema)
	});

	const handleSearchFlights = (values) => {
		console.log({ values });
	};

	const handleSwitchSelectedIATA = () => {
		const { iata_from, iata_to } = getValues();
		setValue('iata_from', iata_to);
		setValue('iata_to', iata_from);
	};

	const [isRoundTrip, setIsRoundTrip] = useState(false);

	return (
		<div className="space-y-8">
			<div>
				<div className="bg-gray-100 shadow-inner flex items-center p-2 rounded-full gap-2">
					<button
						className={`flex-1 text-center py-3 rounded-full font-semibold transition-all text-sm px-6 ${
							isRoundTrip ? 'bg-primary text-white' : 'hover:bg-gray-200 text-gray-500'
						}`}
						onClick={() => setIsRoundTrip(true)}
					>
						ROUND TRIP
					</button>
					<button
						className={`flex-1 text-center py-3 rounded-full font-semibold transition-all text-sm px-6 ${
							!isRoundTrip ? 'bg-primary text-white' : 'hover:bg-gray-200 text-gray-500'
						}`}
						onClick={() => setIsRoundTrip(false)}
					>
						ONE WAY
					</button>
				</div>
			</div>

			<div className="space-y-4">
				<div className="relative flex flex-col sm:flex-row items-start justify-evenly gap-2 sm:gap-4">
					<Controller
						name="iata_from"
						control={control}
						render={({ field, fieldState: { error } }) => (
							<InputSelectAirport
								{...field}
								error={error}
								placeholder="Origin"
								label="Dari"
								onChange={(option) => {
									setValue('iata_from', option?.value);
									setError('iata_from', null);
								}}
							/>
						)}
					/>
					<button
						className="absolute top-[60px] left-1/2 transform -translate-x-1/2 sm:translate-x-0 z-20 sm:static sm:mt-7 bg-secondary hover:bg-secondary-400 transition-all text-gray-700 cursor-pointer p-5 sm:p-4 rounded-full shadow-md text-lg active:opacity-80 outline-0"
						onClick={handleSwitchSelectedIATA}
					>
						<HiOutlineSwitchHorizontal />
					</button>
					<Controller
						name="iata_to"
						control={control}
						render={({ field, fieldState: { error } }) => (
							<InputSelectAirport
								{...field}
								error={error}
								placeholder="Destinasi"
								label="Ke"
								onChange={(option) => {
									setValue('iata_to', option?.value);
									setError('iata_to', null);
								}}
							/>
						)}
					/>
				</div>
			</div>

			<hr />

			<div className="flex justify-end">
				<button
					className="flex items-center transition-all bg-primary hover:bg-primary-400 text-white px-5 py-3 rounded-md gap-2"
					onClick={handleSubmit(handleSearchFlights)}
				>
					<BiSearch size={20} />
					<span>Search Flights</span>
				</button>
			</div>
		</div>
	);
};
