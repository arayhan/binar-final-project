import { ACTION_FLIGHT } from '@/store/actions';
import { queryStringToObject } from '@/utils/helpers';
import moment from 'moment';
import { useEffect } from 'react';
import { BsArrowRight, BsDot } from 'react-icons/bs';
import { notify } from 'react-notify-toast';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

const Flight = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	const params = queryStringToObject(location.search) || {};

	const { actionGetFlightList } = ACTION_FLIGHT;

	useEffect(() => {
		dispatch(
			actionGetFlightList(params, ({ success, message }) => {
				if (message) notify.show(message, success ? 'success' : 'error');
			})
		);
	}, [params]);

	return (
		<div>
			<div className="bg-primary">
				<div className="container py-32 text-white space-y-3">
					<div className="flex items-center text-4xl space-x-6">
						<span>Jakarta (CGK)</span>
						<BsArrowRight />
						<span>Padang (PDG)</span>
					</div>
					<div className="flex items-center opacity-70 space-x-1">
						<span>{moment(params.date_departure).format('dddd, DD MMMM YYYY')}</span>
						<BsDot />
						{params?.passengers && <span>{params.date_departure}</span>}
						{params?.seat_class && <BsDot />}
						{params?.seat_class && <span>{params.seat_class}</span>}
					</div>
				</div>
			</div>

			<div className="bg-gray-100">
				<div className="container py-20">
					<div className="bg-white flex items-center justify-between p-4 rounded-md shadow-md">AirAsia</div>
				</div>
			</div>
		</div>
	);
};

export default Flight;
