import { useState } from 'react';
import { forwardRef } from 'react';
import { MdEventSeat } from 'react-icons/md';
import { Button } from '../Button/Button';
import { InputError } from '../InputError/InputError';
import { InputLabel } from '../InputLabel/InputLabel';
import { ModalSelectSeat } from '../Modal/ModalSelectSeat';

export const InputSeat = forwardRef(({ name, error, label, flightID, placeholder, containerClassName, ...props }, ref) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div ref={ref} className={`space-y-2 ${containerClassName}`}>
			{showModal && (
				<ModalSelectSeat
					value={props.value}
					flightID={flightID}
					name={name}
					onClose={() => setShowModal(false)}
					onSubmit={(seat) => {
						props.onChange(seat);
						setShowModal(false);
					}}
				/>
			)}

			<InputLabel text={label} />
			<div className="flex items-center space-x-4">
				<MdEventSeat size={24} />

				<div className={`w-full flex border ${error?.message ? 'border-red-500' : 'border-gray-300'} rounded-md p-1`}>
					<input {...props} className="flex-1 px-3" disabled placeholder={placeholder} id={props.name} />
					<Button className="px-3 py-2 text-sm rounded-md" variant="primary" text="See Available Seats" onClick={() => setShowModal(true)} />
				</div>
			</div>

			{error && <InputError message={error.message} />}
		</div>
	);
});

InputSeat.displayName = 'InputSeat';
InputSeat.defaultProps = {
	label: 'Pilih Nomor Kursi',
	placeholder: 'Pilih Nomor Kursi'
};
