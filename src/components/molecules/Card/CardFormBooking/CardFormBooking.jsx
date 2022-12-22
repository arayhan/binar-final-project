import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { InputSelectAirport } from '../../InputSelect/InputSelectAirport/InputSelectAirport';
import { yupResolver } from '@hookform/resolvers/yup';
import { searchFlightsSchema } from '@/utils/validation-schema';

export const CardFormBooking = () => {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			iata_from: '',
			iata_to: ''
		},
		resolver: yupResolver(searchFlightsSchema)
	});

	const handleSearchFlights = (values) => {
		console.log({ values });
	};

	const [isRoundTrip, setIsRoundTrip] = useState(false);

	return (
		<div className="bg-white rounded-lg shadow-md p-12 space-y-8">
			<div className="space-y-3">
				<div className="text-gray-700 text-4xl lg:text-5xl">
					Hai, Mau di-<b className="font-bold">Terbangin</b> Ke Mana?
				</div>
				<div className="text-gray-500 text-xl md:text-2xl">Pilih destinasimu yuk!</div>
			</div>

			<div className="sm:w-1/2">
				<div className="bg-gray-100 shadow-inner flex items-center p-2 rounded-full gap-2">
					<button
						className={`flex-1 text-center py-3 rounded-full font-semibold transition-all text-sm lg:text-base ${
							isRoundTrip ? 'bg-primary text-white' : 'hover:bg-gray-200 text-gray-500'
						}`}
						onClick={() => setIsRoundTrip(true)}
					>
						ROUND TRIP
					</button>
					<button
						className={`flex-1 text-center py-3 rounded-full font-semibold transition-all text-sm lg:text-base ${
							!isRoundTrip ? 'bg-primary text-white' : 'hover:bg-gray-200 text-gray-500'
						}`}
						onClick={() => setIsRoundTrip(false)}
					>
						ONE WAY
					</button>
				</div>
			</div>

			<div className="space-y-4">
				<div className="relative flex flex-col sm:flex-row items-center justify-evenly gap-2 sm:gap-4">
					<Controller
						name="iata_from"
						control={control}
						render={({ field, fieldState: { error } }) => <InputSelectAirport {...field} error={error} placeholder="Origin" label="Dari" />}
					/>
					<button className="absolute top-[53px] z-20 sm:static sm:mt-5 bg-secondary hover:bg-secondary-400 transition-all text-gray-700 cursor-pointer p-5 sm:p-4 rounded-full shadow-md text-lg active:opacity-80 outline-0">
						<HiOutlineSwitchHorizontal />
					</button>
					<InputSelectAirport placeholder="Destinasi" label="Ke" />
				</div>
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
		</div>
	);
};
