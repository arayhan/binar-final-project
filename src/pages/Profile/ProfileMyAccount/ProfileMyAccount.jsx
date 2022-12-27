import { InputText } from '@/components/atoms';
import { Button } from '@/components/atoms/Button/Button';
import { profilSchema } from '@/utils/validation-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import SectionSelected from '@/components/molecules/Section/SectionSelected/SectionSelected';

const Account = () => {
	const { control } = useForm({
		resolver: yupResolver(profilSchema),
		defaultValues: { name: '', address: '' }
	});

	return (
		<form>
			<div className="space-y-6 p-2">
				<div className="text-3xl font-bold">Arrangement</div>
				<div className="flex justify-start space-x-6 text-primary text-bold">
					<h3>Account Information</h3>
					<h3>Password and Security</h3>
				</div>
			</div>

			<hr />

			<div className="bg-white rounded-lg space-y-4 px-8 py-4 my-4 border border-solid border-gray-300">
				<h1 className="text-xl text-bold">Personal Data</h1>

				<hr />

				<div className="space-y-4">
					<Controller
						name={'name'}
						control={control}
						render={({ field, fieldState: { error } }) => <InputText {...field} label="Full Name" placeholder="" error={error} />}
					/>
					<SectionSelected />
					<Controller
						name={'address'}
						control={control}
						render={({ field, fieldState: { error } }) => (
							<InputText {...field} label="City of Residence" placeholder="City of Residence" error={error} />
						)}
					/>
				</div>

				<div className="flex justify-end space-x-2">
					<Button className={'px-4 py-3 rounded-md font-semibold'} type="submit" variant={'cancelled'} text="Cancelled" />
					<Button className={'px-4 py-3 rounded-md font-semibold'} type="submit" variant={'primary'} text="Save" />
				</div>
			</div>
		</form>
	);
};

export default Account;
