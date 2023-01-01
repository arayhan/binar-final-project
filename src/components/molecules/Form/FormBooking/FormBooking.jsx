import { Button, InputDate, InputLabel, InputText, InputUpload } from '@/components/atoms';
import { PATH } from '@/configs/routes';
import { ACTION_TRANSACTION } from '@/store/actions';
import { setMaxDateOfBirth } from '@/utils/helpers';
import { bookingSchema } from '@/utils/validation-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { BsPlus } from 'react-icons/bs';
import { notify } from 'react-notify-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputSelectPersonTitle } from '../../InputSelect/InputSelectPersonTitle/InputSelectPersonTitle';

const DEFAULT_VALUE = {
	title: undefined,
	passenger_name: '',
	phone: '',
	nik: '',
	dob: '',
	seat: '',
	visa: '',
	passport: '',
	izin: ''
};

export const FormBooking = ({ bookingID }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { actionCreateTransaction } = ACTION_TRANSACTION;

	const { control, handleSubmit, setValue, setError } = useForm({
		defaultValues: { detail: [{ ...DEFAULT_VALUE }] },
		resolver: yupResolver(bookingSchema)
	});

	const { append, fields, remove } = useFieldArray({ name: 'detail', control });

	const { processingCreateTransaction } = useSelector((state) => state.transaction);

	const handleSubmitBooking = (values) => {
		const request = {
			product_id: Number(bookingID),
			pax: values.detail.length,
			detail: values.detail
		};

		dispatch(
			actionCreateTransaction(request, ({ success, message, response }) => {
				if (success) navigate(`${PATH.TRANSACTION}/${response.id}`);
				notify.show(message, success ? 'success' : 'error');
			})
		);
	};

	return (
		<div className="space-y-8">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-1">
					<div className="text-2xl">Passengers</div>
					<div className="text-gray-500">(5 Passengers Maximum)</div>
				</div>
				{fields.length < 5 && (
					<Button
						variant="primary"
						disabled={processingCreateTransaction}
						className="px-4 py-3 space-x-2 rounded-md flex items-center justify-center"
						onClick={() => append({ ...DEFAULT_VALUE })}
					>
						<BsPlus size={20} />
						<span>Add Person</span>
					</Button>
				)}
			</div>

			{fields.map((passenger, index) => (
				<div key={index} className="space-y-6">
					<div className="bg-white rounded-md shadow-md">
						<div className="flex items-center justify-between px-6 py-4 border-b">
							<div className="font-bold">Person {index + 1}</div>
							{index > 0 && (
								<div>
									<button className="text-red-500 font-bold hover:text-red-400" onClick={() => remove(index)}>
										Remove
									</button>
								</div>
							)}
						</div>
						<div className="p-6 space-y-6">
							<div className="text-secondary-800 space-y-2">
								<div>Make sure that the passenger&apos;s name is exactly as written in the government issued ID/Passport/Driving License. </div>
								<div>Avoid any mistake, because some airlines don&apos;t allow name corrections after booking.</div>
							</div>

							<div className="grid md:grid-cols-2 gap-x-8 gap-y-6 items-start">
								<Controller
									name={`detail[${index}].title`}
									control={control}
									render={({ field, fieldState }) => (
										<InputSelectPersonTitle
											{...field}
											{...fieldState}
											label="Title"
											placeholder="Select Title"
											disabled={processingCreateTransaction}
											onChange={(option) => {
												setValue(`detail[${index}].title`, option.value);
												setError(`detail[${index}].title`, null);
											}}
										/>
									)}
								/>

								<Controller
									name={`detail[${index}].passenger_name`}
									control={control}
									render={({ field, fieldState: { error } }) => (
										<InputText
											{...field}
											label="Nama Lengkap"
											helper="Sesuai KTP/SIM/Paspor"
											disabled={processingCreateTransaction}
											error={error}
										/>
									)}
								/>

								<Controller
									name={`detail[${index}].phone`}
									control={control}
									render={({ field, fieldState: { error } }) => (
										<InputText {...field} label="Nomor Handphone" disabled={processingCreateTransaction} error={error} prefix="+62" />
									)}
								/>

								<Controller
									name={`detail[${index}].nik`}
									control={control}
									render={({ field, fieldState: { error } }) => (
										<InputText {...field} label="NIK" disabled={processingCreateTransaction} error={error} />
									)}
								/>

								<Controller
									name={`detail[${index}].dob`}
									control={control}
									render={({ field, fieldState: { error } }) => (
										<InputDate
											{...field}
											label="Tanggal Lahir"
											maxDate={setMaxDateOfBirth(17)}
											disabled={processingCreateTransaction}
											error={error}
										/>
									)}
								/>

								<Controller
									name={`detail[${index}].seat`}
									control={control}
									render={({ field, fieldState: { error } }) => (
										<InputText {...field} label="Pilih Nomor Kursi" disabled={processingCreateTransaction} error={error} />
									)}
								/>
							</div>

							<div className="space-y-3">
								<InputLabel text="Upload Dokumen" />
								<div className="p-4 border rounded-md space-y-4">
									<div className="grid md:grid-cols-3 gap-4">
										<Controller
											name={`detail[${index}].visa`}
											control={control}
											render={({ field, fieldState: { error } }) => (
												<InputUpload
													{...field}
													label="Upload Visa"
													onUploaded={(fileURL) => {
														setValue(`detail[${index}].visa`, fileURL);
														setError(`detail[${index}].visa`, null);
													}}
													disabled={processingCreateTransaction}
													error={error}
												/>
											)}
										/>
										<Controller
											name={`detail[${index}].passport`}
											control={control}
											render={({ field, fieldState: { error } }) => (
												<InputUpload
													{...field}
													label="Upload Passport"
													onUploaded={(fileURL) => {
														setValue(`detail[${index}].passport`, fileURL);
														setError(`detail[${index}].passport`, null);
													}}
													disabled={processingCreateTransaction}
													error={error}
												/>
											)}
										/>
										<Controller
											name={`detail[${index}].izin`}
											control={control}
											render={({ field, fieldState: { error } }) => (
												<InputUpload
													{...field}
													label="Upload Izin"
													onUploaded={(fileURL) => {
														setValue(`detail[${index}].izin`, fileURL);
														setError(`detail[${index}].izin`, null);
													}}
													disabled={processingCreateTransaction}
													error={error}
												/>
											)}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}

			<div className="flex justify-end">
				<button
					className="flex items-center transition-all bg-primary hover:bg-primary-400 text-white px-5 py-3 rounded-md gap-2"
					onClick={handleSubmit(handleSubmitBooking)}
				>
					<span>Book Sekarang</span>
				</button>
			</div>
		</div>
	);
};
