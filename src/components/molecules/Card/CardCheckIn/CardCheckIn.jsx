import { FormCheckIn } from '../../Form/FormCheckIn/FormCheckIn';

export const CardCheckIn = () => {
	return (
		<div className="bg-white rounded-lg shadow-md p-12 space-y-8">
			<div className="space-y-3">
				<div className="text-gray-700 text-4xl">Check-In</div>
			</div>

			<FormCheckIn />
		</div>
	);
};
