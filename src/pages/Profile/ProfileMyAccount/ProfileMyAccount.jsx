import { InputText } from '@/components/atoms';
import { Button } from '@/components/atoms/Button/Button';
import { ACTION_PROFILE } from '@/store/actions';
import { profileSchema } from '@/utils/validation-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Account = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { actionGetProfile, actionUpdateProfile } = ACTION_PROFILE;

	const { profileUser, fetchingProfile, updateProfile } = useSelector((state) => state.profile);

	useEffect(() => {
		if (profileUser && fetchingProfile) {
			setValue('email', profileUser.email || '');
			setValue('username', profileUser.username || '');
			setValue('name', profileUser.name || '');
			setValue('phone', profileUser.phone || '');
		}
	}, [profileUser, fetchingProfile]);

	useEffect(() => {
		dispatch(
			actionGetProfile(({ success, message }) => {
				if (!success) notify.show(message, 'error');
			})
		);
	}, []);

	const handleSubmitUpdateProfile = (values) => {
		const request = {
			email: values.email,
			username: values.username,
			name: values.name,
			phone: values.phone
		};

		dispatch(
			actionUpdateProfile(request, ({ success, message }) => {
				if (success) navigate(PATH.PROFILE_MY_ACCOUNT);
				notify.show(message, success ? 'success' : 'error');
			})
		);
	};

	const { control, setValue, handleSubmit } = useForm({
		resolver: yupResolver(profileSchema),
		defaultValues: { email: '', username: '', name: '', phone: '' }
	});

	return (
		<form>
			<div className="space-y-6 p-2">
				<div className="text-3xl font-bold">Arrangement</div>
				<div className="flex space-x-6 text-primary text-bold">
					<h3>Account Information</h3>
				</div>
			</div>

			<hr />

			<div className="bg-white rounded-lg space-y-4 px-8 py-4 my-4 border border-solid border-gray-300">
				<h1 className="text-xl text-bold">Personal Data</h1>

				<hr />

				<div className="space-y-4 lg:w-[60rem]">
					<Controller
						name={'email'}
						control={control}
						render={({ field, fieldState: { error } }) => <InputText {...field} label="Email" placeholder="" error={error} />}
					/>
					<Controller
						name={'username'}
						control={control}
						render={({ field, fieldState: { error } }) => <InputText {...field} label="Username" placeholder="" error={error} />}
					/>
					<Controller
						name={'name'}
						control={control}
						render={({ field, fieldState: { error } }) => <InputText {...field} label="Full Name" placeholder="" error={error} />}
					/>
					<Controller
						name={'phone'}
						control={control}
						render={({ field, fieldState: { error } }) => <InputText {...field} label="Phone Number" placeholder="" error={error} />}
					/>
				</div>

				<div className="flex justify-end space-x-2">
					<Button
						className={'px-4 py-3 rounded-md font-semibold'}
						type="submit"
						variant={'primary'}
						text="Save"
						onClick={handleSubmit(handleSubmitUpdateProfile)}
					/>
				</div>
			</div>
		</form>
	);
};

export default Account;
