import { FormSearchFlights } from '../../Form/FormSearchFlights/FormSearchFlights';

export const CardFormSearchFlights = () => {
	return (
		<div className="bg-white rounded-lg shadow-md p-12 space-y-8">
			<div className="space-y-3">
				<div className="text-gray-700 text-4xl">
					Hai, Mau di-<b className="font-bold">Terbangin</b> Ke Mana?
				</div>
				<div className="text-gray-500 text-xl">Pilih destinasimu yuk!</div>
			</div>

			<FormSearchFlights />
		</div>
	);
};
