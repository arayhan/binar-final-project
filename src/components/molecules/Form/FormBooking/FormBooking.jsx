import { InputDate, InputLabel, InputText, InputUpload } from '@/components/atoms';
import { setMaxDateOfBirth } from '@/utils/helpers';
import { bookingSchema } from '@/utils/validation-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import { BsPlus } from 'react-icons/bs';
import { InputSelectPersonTitle } from '../../InputSelect/InputSelectPersonTitle/InputSelectPersonTitle';

export const FormBooking = ({ bookingID }) => {
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

	const { control, handleSubmit, setValue, setError } = useForm({
		defaultValues: { details: [{ ...DEFAULT_VALUE }] },
		resolver: yupResolver(bookingSchema)
	});

	const { append, fields, remove } = useFieldArray({ name: 'details', control });

	const handleSubmitBooking = (values) => {
		const request = {
			booking_id: bookingID,
			pax: values.details.length,
			details: values.details
		};

		console.log({ request });
	};

	return (
		<div className="space-y-8">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-1">
					<div className="text-2xl">Passengers</div>
					<div className="text-gray-500">(5 Passengers Maximum)</div>
				</div>
				{fields.length < 5 && (
					<button
						className="bg-primary hover:bg-primary-400 transition-all text-white px-4 py-3 space-x-2 rounded-md flex items-center justify-center"
						onClick={() => append({ ...DEFAULT_VALUE })}
					>
						<BsPlus size={20} />
						<span>Add Person</span>
					</button>
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
									name={`details[${index}].title`}
									control={control}
									render={({ field, fieldState }) => (
										<InputSelectPersonTitle
											{...field}
											{...fieldState}
											label="Title"
											placeholder="Select Title"
											onChange={(option) => {
												setValue(`details[${index}].title`, option.value);
												setError(`details[${index}].title`, null);
											}}
										/>
									)}
								/>

								<Controller
									name={`details[${index}].passenger_name`}
									control={control}
									render={({ field, fieldState: { error } }) => (
										<InputText {...field} label="Nama Lengkap" helper="Sesuai KTP/SIM/Paspor" error={error} />
									)}
								/>

								<Controller
									name={`details[${index}].phone`}
									control={control}
									render={({ field, fieldState: { error } }) => <InputText {...field} label="Nomor Handphone" error={error} prefix="+62" />}
								/>

								<Controller
									name={`details[${index}].nik`}
									control={control}
									render={({ field, fieldState: { error } }) => <InputText {...field} label="NIK" error={error} />}
								/>

								<Controller
									name={`details[${index}].dob`}
									control={control}
									render={({ field, fieldState: { error } }) => (
										<InputDate {...field} label="Tanggal Lahir" maxDate={setMaxDateOfBirth(17)} error={error} />
									)}
								/>

								<Controller
									name={`details[${index}].seat`}
									control={control}
									render={({ field, fieldState: { error } }) => <InputText {...field} label="Pilih Nomor Kursi" error={error} />}
								/>
							</div>

							<div className="space-y-3">
								<InputLabel text="Upload Dokumen" />
								<div className="p-4 border rounded-md space-y-4">
									<div className="grid md:grid-cols-3 gap-4">
										<Controller
											name={`details[${index}].visa`}
											control={control}
											render={({ field, fieldState: { error } }) => (
												<InputUpload
													{...field}
													label="Upload Visa"
													onUploaded={(fileURL) => setValue(`details[${index}].visa`, fileURL)}
													error={error}
												/>
											)}
										/>
										<Controller
											name={`details[${index}].passport`}
											control={control}
											render={({ field, fieldState: { error } }) => (
												<InputUpload
													{...field}
													label="Upload Passport"
													onUploaded={(fileURL) => setValue(`details[${index}].passport`, fileURL)}
													error={error}
												/>
											)}
										/>
										<Controller
											name={`details[${index}].izin`}
											control={control}
											render={({ field, fieldState: { error } }) => (
												<InputUpload
													{...field}
													label="Upload Izin"
													onUploaded={(fileURL) => setValue(`details[${index}].izin`, fileURL)}
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
