import { useEffect, useState } from 'react';
import { forwardRef } from 'react';
import { MdEventSeat } from 'react-icons/md';
import { ACTION_FLIGHT } from '@/store/actions';
import { Button } from '../Button/Button';
import { InputError } from '../InputError/InputError';
import { InputLabel } from '../InputLabel/InputLabel';
import { ModalUpload } from '../Modal/ModalUpload';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const InputSeat = forwardRef(({ name, error, label, disabled, placeholder, containerClassName, onChange, ...props }, ref) => {
	const dispatch = useDispatch();
	const params = useParams();

	const { flightItem, fetchingFlightItem } = useSelector((state) => state.flight);

	const [showModal, setShowModal] = useState(false);
	const [selectedSeat, setSelectedSeat] = useState(false);

	const { bookingID } = params;
	const { actionGetFlightItem } = ACTION_FLIGHT;

	const handleUploadedFile = (fileURL) => {
		setShowModal(false);
		setUploadedFileURL(fileURL);
		onChange(fileURL);
	};

	useEffect(() => {
		dispatch(
			actionGetFlightItem(bookingID, ({ success, message }) => {
				if (!success) notify.show(message, 'error');
			})
		);
	}, [bookingID, dispatch]);

	return (
		<div ref={ref} className={`space-y-2 ${containerClassName}`}>
			{showModal && <ModalUpload name={name} onClose={() => setShowModal(false)} onChange={handleUploadedFile} />}

			<InputLabel text={label} />
			<div className="flex items-center space-x-4">
				<MdEventSeat size={24} />

				<div className={`w-full flex justify-between border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md p-1`}>
					<input {...props} className="flex-1 px-3" ref={ref} disabled placeholder={placeholder} id={props.name} />
					<Button className="px-3 py-2 text-sm rounded-md" variant="primary" text="See Available Seats" />
				</div>
			</div>

			{error && <InputError message={error.message} />}
		</div>
	);
});

InputSeat.displayName = 'InputSeat';
InputSeat.defaultProps = {
	label: 'Pilih Nomor Kursi',
	placeholder: 'Pilih Nomor Kursi',
	onChange: () => {}
};
