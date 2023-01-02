import { PATH } from '@/configs/routes';
import { ACTION_FLIGHT } from '@/store/actions';
import { formatRupiah, queryStringToObject } from '@/utils/helpers';
import moment from 'moment';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { BsArrowRight, BsDot } from 'react-icons/bs';
import { CgAirplane } from 'react-icons/cg';
import { MdEventSeat } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import { notify } from 'react-notify-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

const Flight = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	const { flightList, fetchingFlightList } = useSelector((state) => state.flight);

	const [error, setError] = useState(null);
	const [params, setParams] = useState({});

	const { actionGetFlightList } = ACTION_FLIGHT;

	const handleSelectFlight = (flightItem) => {
		navigate(`${PATH.BOOKING}/${flightItem.id}`);
	};

	useEffect(() => {
		const _params = queryStringToObject(location.search);

		setParams(_params);
		dispatch(
			actionGetFlightList(_params, ({ success, message }) => {
				if (message) notify.show(message, success ? 'success' : 'error');
				if (message && !success) setError(message);
			})
		);
	}, [location.search]);

	return (
		<div>
			<div className="bg-primary">
				<div className="container py-32 text-white space-y-3">
					{fetchingFlightList && <SkeletonBanner />}
					{!fetchingFlightList && (
						<Fragment>
							<div className="flex items-center text-4xl space-x-6">
								{params?.iata_from && <span>{params.iata_from}</span>}
								<BsArrowRight />
								{params?.iata_to && <span>{params.iata_to}</span>}
							</div>
							<div className="flex items-center opacity-70 space-x-1">
								{params?.date_departure && <span>{moment(params.date_departure).format('dddd, DD MMMM YYYY')}</span>}
								{params?.passengers && <BsDot />}
								{params?.passengers && <span>{params.passengers} Passenger(s)</span>}
								{params?.seat_class && <BsDot />}
								{params?.seat_class && <span className="capitalize">{params.seat_class}</span>}
							</div>
						</Fragment>
					)}
				</div>
			</div>

			<div className="bg-secondary-100">
				<div className="container max-w-screen-lg py-20">
					{fetchingFlightList && <SkeletonCardItem />}
					{!fetchingFlightList && (
						<Fragment>
							{(flightList?.length === 0 || error) && (
								<div className="text-center flex flex-col items-center space-y-3">
									<img className="w-96" src={require('@/images/error-illustration.png')} alt="" />
									<div className="text-2xl opacity-60">{error || 'Not Found'}</div>
								</div>
							)}
							{flightList?.length > 0 && (
								<div className="space-y-8">
									<div className="text-2xl">Available Flights</div>
									<div className="space-y-6">
										{flightList?.length > 0 &&
											flightList?.map((flight) => (
												<div key={flight.id} className="bg-white p-6 rounded-md shadow-md space-y-8">
													<div className="flex flex-col md:flex-row items-start justify-between">
														<div className="flex items-center space-x-4">
															{flight.airplane.airline?.logo && (
																<img className="w-20" src={flight.airplane.airline?.logo} alt={flight.airplane.airline.name} />
															)}
															{!flight.airplane.airline?.logo && (
																<span className="bg-secondary rounded-full p-3">
																	<CgAirplane size={28} />
																</span>
															)}
															<div>
																<div className="text-2xl">{flight.airplane.airline.name}</div>
																<div className="opacity-70">{flight.flightCode || '-'}</div>
															</div>
														</div>
													</div>

													<div className="flex flex-col md:flex-row gap-6 items-center justify-between">
														<div className="flex items-center space-x-12">
															<div className="inline-flex flex-col items-center justify-center space-y-2">
																<div className="text-base sm:text-xl">{moment(flight.date_departure).format('hh:ss')}</div>
																<div className="text-sm sm:text-base inline-block p-1 px-3 bg-secondary rounded-full">{flight.iata_from}</div>
															</div>
															<div className="relative text-center w-28 sm:w-56">
																<div className="absolute top-1/2 transform -translate-y-1/2 w-full h-[1px] bg-gray-300" />
																<div className="relative inline-block bg-white px-3 py-1">Direct</div>
															</div>
															<div className="inline-flex flex-col items-center justify-center space-y-2">
																<div className="text-base sm:text-xl">{moment(flight.date_arrival).format('hh:ss')}</div>
																<div className="text-sm sm:text-base  inline-block p-1 px-3 bg-secondary rounded-full">{flight.iata_to}</div>
															</div>
														</div>

														<div className="flex items-center justify-center space-x-3 border rounded-md px-6 py-3">
															<MdEventSeat size={24} />
															<div className="flex flex-col items-center space-y-1">
																<div className="font-bold">{flight.stock}</div>
																<div className="text-xs">Tersisa</div>
															</div>
														</div>
													</div>

													<hr />

													<div className="flex flex-wrap items-center justify-end gap-3">
														<div className="space-x-1">
															<span className="font-bold text-xl text-primary">{formatRupiah(flight.price)}</span>
															<span>/</span>
															<span>pax</span>
														</div>
														<button
															className="flex items-center py-2 px-6 bg-primary hover:bg-primary-400 text-white rounded-md"
															onClick={() => handleSelectFlight(flight)}
														>
															Pilih Penerbangan
														</button>
													</div>
												</div>
											))}
									</div>
								</div>
							)}
						</Fragment>
					)}
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

const SkeletonCardItem = () => (
	<div className="space-y-6">
		<div className="bg-white p-6 rounded-md shadow-md space-y-8">
			<div className="flex items-center space-x-4">
				<Skeleton circle width={50} height={50} />
				<div>
					<Skeleton className="w-40" height={24} />
					<Skeleton className="w-32" height={18} />
				</div>
			</div>
			<div>
				<Skeleton className="inline-block w-1/3" height={18} />
			</div>
			<div className="flex justify-end">
				<Skeleton className="inline-block" width={200} height={24} />
			</div>
		</div>
		<div className="bg-white p-6 rounded-md shadow-md space-y-8">
			<div className="flex items-center space-x-4">
				<Skeleton circle width={50} height={50} />
				<div>
					<Skeleton className="w-40" height={24} />
					<Skeleton className="w-32" height={18} />
				</div>
			</div>
			<div>
				<Skeleton className="inline-block w-1/3" height={18} />
			</div>
			<div className="flex justify-end">
				<Skeleton className="inline-block" width={200} height={24} />
			</div>
		</div>
	</div>
);

export default Flight;
