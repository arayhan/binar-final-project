import { FormBooking } from '@/components/molecules';
import { PATH } from '@/configs/routes';
import { Fragment, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { notify } from 'react-notify-toast';
import { useNavigate, useParams } from 'react-router-dom';

const Booking = () => {
	const navigate = useNavigate();
	const params = useParams();

	const { bookingID } = params;

	const fetching = false;

	const handleRedirectToSearchFlight = () => {
		notify.show('Kode booking tidak ditemukan', 'error');
		navigate(PATH.FLIGHT);
	};

	useEffect(() => {
		if (!bookingID) handleRedirectToSearchFlight();
	}, [bookingID]);

	return (
		<div>
			<div className="bg-primary">
				<div className="container py-32 text-white space-y-3">
					{fetching && <SkeletonBanner />}
					{!fetching && (
						<Fragment>
							<div className="flex items-center text-4xl space-x-6">Your Booking</div>
							<div className="flex items-center opacity-70 space-x-1">Isi detail Anda dan tinjau pemesanan Anda.</div>
						</Fragment>
					)}
				</div>
			</div>

			<div className="bg-gray-100">
				<div className="container max-w-screen-lg py-20">
					<FormBooking />
				</div>
			</div>
		</div>
	);
};

const SkeletonBanner = () => (
	<div className="flex flex-col space-y-3 opacity-30">
		<Skeleton inline className="w-1/2" height={28} />
		<Skeleton inline className="w-1/3" />
	</div>
);

export default Booking;
