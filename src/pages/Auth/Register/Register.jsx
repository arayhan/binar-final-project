import { InputText } from '@/components/atoms';
import { Button } from '@/components/atoms/Button/Button';
import { ACTION_AUTH } from '@/store/actions';
import { registerSchema } from '@/utils/validation-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { GoogleLogin } from '@react-oauth/google';
import Skeleton from 'react-loading-skeleton';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
	const dispatch = useDispatch();

	const { isProcessingRegister } = useSelector((state) => state.auth);

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(registerSchema),
		defaultValues: { phone: '', email: '', name: '', username: '', password: '' }
	});

	const handleRegister = (values) => dispatch(ACTION_AUTH.authRegister(values));

	const handleGoogleLogin = (response) => {
		console.log({ response });
	};

	return (
		<form onSubmit={handleSubmit(handleRegister)}>
			<div className="space-y-3 p-8">
				<div className="text-3xl font-bold">Register</div>
				<div className="opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nam.</div>
			</div>

			<hr />

			<div className="space-y-6 px-10 py-6">
				<div className="space-y-4">
					<Controller
						name={'phone'}
						control={control}
						render={({ field, fieldState: { error } }) => (
							<InputText
								{...field}
								label="Phone"
								placeholder="Masukkan nomor ponsel"
								disabled={isProcessingRegister}
								error={error}
							/>
						)}
					/>
					<Controller
						name={'email'}
						control={control}
						render={({ field, fieldState: { error } }) => (
							<InputText
								{...field}
								label="Email"
								placeholder="Masukkan email"
								disabled={isProcessingRegister}
								error={error}
							/>
						)}
					/>
					<Controller
						name={'name'}
						control={control}
						render={({ field, fieldState: { error } }) => (
							<InputText
								{...field}
								label="Name"
								placeholder="Masukkan nama"
								disabled={isProcessingRegister}
								error={error}
							/>
						)}
					/>
					<Controller
						name={'username'}
						control={control}
						render={({ field, fieldState: { error } }) => (
							<InputText
								{...field}
								label="Username"
								placeholder="Masukkan username"
								disabled={isProcessingRegister}
								error={error}
							/>
						)}
					/>
					<Controller
						name={'password'}
						control={control}
						render={({ field, fieldState: { error } }) => (
							<InputText
								{...field}
								type="password"
								label="Password"
								placeholder="Masukkan password"
								disabled={isProcessingRegister}
								error={error}
							/>
						)}
					/>
				</div>
			</div>

			<hr />

			<div className="space-y-4 p-8">
				<Button
					className={'w-full px-4 py-3 rounded-md font-semibold'}
					type="submit"
					variant={'primary'}
					disabled={isProcessingRegister}
					text="Register"
				/>

				<div className="text-center opacity-70">atau</div>

				{isProcessingRegister && <Skeleton containerClassName="block" height={38} />}
				{!isProcessingRegister && (
					<GoogleLogin
						theme="outline"
						logo_alignment="center"
						text="Test"
						onSuccess={handleGoogleLogin}
						onError={() => {
							console.log('Login Failed');
						}}
					/>
				)}
			</div>
		</form>
	);
};

export default Register;
