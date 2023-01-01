import { ACTION_FLIGHT } from '@/store/actions';
import { LETTERS } from '@/utils/constants';
import { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { notify } from 'react-notify-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from './Modal';

export const ModalSelectSeat = ({ value, bookingID, onClose, onSubmit }) => {
	const dispatch = useDispatch();

	const { actionGetFlightItem } = ACTION_FLIGHT;

	const { flightItem, fetchingFlightItem } = useSelector((state) => state.flight);

	const [selectedSeat, setSelectedSeat] = useState(value);
	const [seatOptions, setSeatOptions] = useState(null);
	const [availableSeats, setAvailableSeats] = useState(null);

	const handleChangeSeat = (seat) => {
		if (availableSeats.includes(seat)) setSelectedSeat(seat);
		else {
			notify.show('Sayangnya tempat duduk yang kamu pilih sudah diisi orang lain 😣', 'warning');
		}
	};

	useEffect(() => {
		if (flightItem) {
			const totalRow = flightItem.airplane.total_seat_row;
			const totalColumn = flightItem.airplane.total_seat_column;

			const options = new Array(totalRow).fill(0).map((row, rowIndex) => {
				return new Array(totalColumn).fill(0).map((column, columnIndex) => {
					return `${rowIndex + 1}${LETTERS[columnIndex]}`;
				});
			});

			setSeatOptions(options);
			setAvailableSeats(flightItem.available_seat);
		}
	}, [flightItem]);

	useEffect(() => {
		dispatch(
			actionGetFlightItem(bookingID, ({ success, message }) => {
				if (!success) notify.show(message, 'error');
			})
		);
	}, [bookingID, dispatch]);

	return (
		<Modal
			title="Pilih Tempat Duduk"
			description="Yuk amankan tempatmu! 😁"
			isLoading={fetchingFlightItem}
			onClose={onClose}
			onSubmit={() => onSubmit(selectedSeat)}
			submitButtonText="Pilih"
		>
			<div className="flex flex-col md:flex-row gap-8">
				<div className="border rounded-md flex justify-center max-h-[70vh] overflow-y-scroll w-8/12">
					<div className="p-8 flex flex-col gap-4">
						{seatOptions &&
							seatOptions.map((row) => (
								<div className={`grid grid-cols-${row.length + 1} gap-2`} key={row}>
									{row.map((seat, seatIndex) => (
										<Fragment key={seatIndex}>
											{seatIndex > 0 && seatIndex % 3 === 0 && <div />}
											{availableSeats.includes(seat) && (
												<button
													key={seat}
													className={`${
														selectedSeat === seat
															? 'bg-slate-600'
															: availableSeats.includes(seat)
															? 'bg-green-600 hover:bg-green-500'
															: 'bg-red-500'
													} p-3 rounded-md text-sm text-white transition-all font-semibold`}
													onClick={() => handleChangeSeat(seat)}
												>
													{seat}
												</button>
											)}
										</Fragment>
									))}
								</div>
							))}
					</div>
				</div>
				<div className="flex flex-col justify-between flex-1 space-y-8">
					<div className="space-y-8">
						<div className="space-y-2">
							<div className="font-bold text-lg">Keterangan</div>
							<div className="space-y-1 text-sm">
								<div className="flex items-center space-x-3">
									<div className="bg-red-500 p-2 rounded-md text-xs text-white" />
									<div>Not Available</div>
								</div>
								<div className="flex items-center space-x-3">
									<div className="bg-green-600 p-2 rounded-md text-xs text-white" />
									<div>Available</div>
								</div>
								<div className="flex items-center space-x-3">
									<div className="bg-slate-600 p-2 rounded-md text-xs text-white" />
									<div>Tempat dudukmu</div>
								</div>
							</div>
						</div>

						{flightItem && (
							<div className="space-y-2 text-sm">
								<div className="font-bold text-lg">Metadata</div>
								<div className="grid grid-cols-3 gap-x-4 gap-y-1 items-center">
									<div className="col-span-2 bg-gray-100 p-2">Total Kursi</div>
									<div className="font-semibold text-base">{flightItem.airplane.total_seat_row * flightItem.airplane.total_seat_column}</div>

									<div className="col-span-2 bg-gray-100 p-2">Kursi Tersedia</div>
									<div className="font-semibold text-base">{flightItem.stock}</div>
								</div>
							</div>
						)}
					</div>

					{selectedSeat && (
						<div className="p-3 rounded-md bg-slate-600 text-white space-y-1">
							<div className="text-sm opacity-60">Tempat Dudukmu</div>
							<div className="space-y-2 text-lg">
								<div className="font-bold">{selectedSeat}</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</Modal>
	);
};

ModalSelectSeat.defaultProps = {
	name: 'selectSeat',
	onChange: () => {}
};
