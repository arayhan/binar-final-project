import { InputText } from '@/components/atoms';
import { Button } from '@/components/atoms/Button/Button';
import { ACTION_AUTH } from '@/store/actions';
import { loginSchema } from '@/utils/validation-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { GoogleLogin } from '@react-oauth/google';
import Skeleton from 'react-loading-skeleton';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
	const dispatch = useDispatch();

	const { isProcessingLogin } = useSelector((state) => state.auth);

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(loginSchema),
		defaultValues: { email: '', password: '' }
	});

	const handleLogin = (values) => dispatch(ACTION_AUTH.authLogin(values));

	const handleGoogleLogin = (response) => {
		console.log({ response });
	};

	return (
		<form onSubmit={handleSubmit(handleLogin)}>
			<div className="space-y-3 p-8">
				<div className="text-3xl font-bold">Login</div>
				<div className="opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nam.</div>
			</div>

			<hr />

			<div className="space-y-6 px-10 py-6">
				<div className="space-y-4">
					<Controller
						name={'email'}
						control={control}
						render={({ field, fieldState: { error } }) => (
							<InputText
								{...field}
								label="Email"
								placeholder="Masukkan email"
								disabled={isProcessingLogin}
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
								disabled={isProcessingLogin}
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
					disabled={isProcessingLogin}
					text="Login"
				/>

				<div className="text-center opacity-70">atau</div>

				{isProcessingLogin && <Skeleton containerClassName="block" height={38} />}
				{!isProcessingLogin && (
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

export default Login;
