import { InputDate, InputText } from '@/components/atoms';
import { setMaxDateOfBirth } from '@/utils/helpers';
import moment from 'moment';
import { useForm, Controller } from 'react-hook-form';
import { BsPlus } from 'react-icons/bs';
import { InputSelectPersonTitle } from '../../InputSelect/InputSelectPersonTitle/InputSelectPersonTitle';

export const FormBooking = () => {
	const { control, handleSubmit, setValue, setError } = useForm({
		defaultValues: {
			title: undefined,
			passenger_name: '',
			phone: '',
			nik: '',
			dob: '',
			seat: '',
			visa: '',
			passport: '',
			izin: ''
		}
	});

	const handleSubmitBooking = (values) => {
		console.log({ values });
	};

	return (
		<div className="space-y-8">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-1">
					<div className="text-2xl">Passengers</div>
					<div className="text-gray-500">(5 Passengers Maximum)</div>
				</div>
				<button className="bg-primary hover:bg-primary-400 transition-all text-white px-4 py-3 space-x-2 rounded-md flex items-center justify-center">
					<BsPlus size={20} />
					<span>Add Person</span>
				</button>
			</div>

			<div className="space-y-6">
				<div className="bg-white rounded-md shadow-md">
					<div className="flex items-center justify-between px-6 py-4 border-b">
						<div>Person 1</div>
						<div>
							<button className="text-primary font-bold hover:text-primary-400">Save</button>
						</div>
					</div>
					<div className="p-6 space-y-6">
						<div className="text-secondary-800 space-y-2">
							<div>Make sure that the passenger&apos;s name is exactly as written in the government issued ID/Passport/Driving License. </div>
							<div>Avoid any mistake, because some airlines don&apos;t allow name corrections after booking.</div>
						</div>

						<div className="grid md:grid-cols-2 gap-8 items-end">
							<Controller
								name="title"
								control={control}
								render={({ field, fieldState }) => (
									<InputSelectPersonTitle
										{...field}
										{...fieldState}
										label="Title"
										placeholder="Select Title"
										onChange={(option) => {
											setValue('title', option.value);
											setError('title', null);
										}}
									/>
								)}
							/>

							<Controller
								name="passenger_name"
								control={control}
								render={({ field, fieldState: { error } }) => (
									<InputText {...field} label="Nama Lengkap" helper="Sesuai KTP/SIM/Paspor" error={error} />
								)}
							/>

							<Controller
								name="phone"
								control={control}
								render={({ field, fieldState: { error } }) => <InputText {...field} label="Nomor Handphone" error={error} prefix="+62" />}
							/>

							<Controller
								name="nik"
								control={control}
								render={({ field, fieldState: { error } }) => <InputText {...field} label="NIK" error={error} />}
							/>

							<Controller
								name="dob"
								control={control}
								render={({ field, fieldState: { error } }) => (
									<InputDate {...field} label="Tanggal Lahir" maxDate={setMaxDateOfBirth(17)} error={error} />
								)}
							/>
						</div>
					</div>
				</div>
			</div>

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
