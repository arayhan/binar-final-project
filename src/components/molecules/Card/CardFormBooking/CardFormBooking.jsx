import React, { useState } from 'react';

export const CardFormBooking = () => {
	const [isRoundTrip, setIsRoundTrip] = useState(true);

	return (
		<div className="bg-white rounded-lg shadow-md p-8 space-y-8">
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

			<div>
				<div className="text-gray-700 text-xl">Dari</div>
				<div className="relative">
					<input
						type="text"
						className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-primary"
						placeholder="Ketik nama kota atau bandara"
					/>
					<div className="absolute top-3 right-3">test</div>
				</div>
			</div>
		</div>
	);
};
