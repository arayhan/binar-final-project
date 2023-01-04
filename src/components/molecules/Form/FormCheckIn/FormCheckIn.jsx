import { Button, InputText } from '@/components/atoms';
import { ACTION_ETICKET } from '@/store/actions';
import { checkinSchema } from '@/utils/validation-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BiSearch } from 'react-icons/bi';
import { notify } from 'react-notify-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormCheckInTermsAndCondition } from './FormCheckInTermsAndCondition';

export const FormCheckIn = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { actionCheckIn } = ACTION_ETICKET;

	const { control, handleSubmit } = useForm({
		defaultValues: {
			flightCode: '',
			ticketNum: '',
			passenger_name: ''
		},
		resolver: yupResolver(checkinSchema)
	});

	const [isAgreeWithTermsAndCondition, setIsAgreeWithTermsAndCondition] = useState(false);

	const handleSubmitCheckIn = (values) => {
		dispatch(
			actionCheckIn(values, ({ success, message, response }) => {
				notify.show(message, success ? 'success' : 'error');
				// navigate(`${PATH.TRANSACTION}/${response.payment_id}`)
			})
		);
	};

	return (
		<form className="space-y-8" onSubmit={handleSubmit(handleSubmitCheckIn)}>
			<div className="space-y-3">
				<div className="font-semibold">Syarat dan Ketentuan Web Check-In</div>
				<div className="p-3 max-h-40 overflow-y-scroll border rounded-md">
					<FormCheckInTermsAndCondition />
				</div>

				<label
					className="inline-flex items-center space-x-3 font-semibold hover:cursor-pointer px-3 py-2 rounded-md bg-gray-100 hover:bg-primary-100"
					htmlFor="termsAndCondition"
				>
					<input
						className="rounded-sm p-2"
						type="checkbox"
						id="termsAndCondition"
						checked={isAgreeWithTermsAndCondition}
						onChange={() => setIsAgreeWithTermsAndCondition(!isAgreeWithTermsAndCondition)}
					/>
					<div>Saya sudah membaca Pemberitahuan dan Informasi Online Check-in</div>
				</label>
			</div>

			<div className="space-y-3">
				<Controller
					name="flightCode"
					control={control}
					render={({ field, fieldState: { error } }) => (
						<InputText {...field} label="Flight Code" placeholder="Flight Code" disabled={!isAgreeWithTermsAndCondition} error={error} />
					)}
				/>
				<Controller
					name="ticketNum"
					control={control}
					render={({ field, fieldState: { error } }) => (
						<InputText {...field} label="Ticket Num" placeholder="Ticket Num" disabled={!isAgreeWithTermsAndCondition} error={error} />
					)}
				/>
				<Controller
					name="passenger_name"
					control={control}
					render={({ field, fieldState: { error } }) => (
						<InputText {...field} label="Passenger Name" placeholder="Passenger Name" disabled={!isAgreeWithTermsAndCondition} error={error} />
					)}
				/>
			</div>
			<hr />
			<div className="flex justify-end">
				<Button
					variant="primary"
					className="flex items-center transition-all bg-primary hover:bg-primary-400 text-white px-5 py-3 rounded-md gap-2"
					disabled={!isAgreeWithTermsAndCondition}
					onClick={handleSubmit(handleSubmitCheckIn)}
				>
					<BiSearch size={20} />
					<span>Check-In</span>
				</Button>
			</div>
		</form>
	);
};
