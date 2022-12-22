import { ButtonLoginWithGoogle, InputText } from '@/components/atoms';
import { Button } from '@/components/atoms/Button/Button';
import { ACTION_AUTH } from '@/store/actions';
import { loginSchema } from '@/utils/validation-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import Skeleton from 'react-loading-skeleton';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/configs/routes';
import { queryStringToObject } from '@/utils/helpers';
import { notify } from 'react-notify-toast';

const Login = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();

	const { actionLogin, actionEmailActivation } = ACTION_AUTH;

	const { isProcessingLogin, isProcessingEmailActivation } = useSelector((state) => state.auth);

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(loginSchema),
		defaultValues: { email: '', password: '' }
	});

	const handleLogin = (values) => {
		dispatch(
			actionLogin(values, ({ success, message }) => {
				if (message) notify.show(message, success ? 'success' : 'error');
			})
		);
	};

	useEffect(() => {
		if (location.search?.indexOf('token') !== -1 && !isProcessingEmailActivation) {
			const { token } = queryStringToObject(location.search);
			dispatch(
				actionEmailActivation({ token }, ({ success, message }) => {
					navigate(ROUTES.LOGIN.path);
					notify.show(message, success ? 'success' : 'error');
				})
			);
		}
	}, []);

	return (
		<div className="flex flex-col justify-center items-center px-8 py-20 lg:px-20 space-y-4 lg:min-h-screen">
			<div className="w-full bg-white shadow-md rounded-md">
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
									<InputText {...field} label="Email" placeholder="Masukkan email" disabled={isProcessingLogin} error={error} />
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

					<div className="space-y-6 p-8">
						<div className="space-y-3">
							<Button
								className={'w-full px-4 py-3 rounded-md font-semibold'}
								type="submit"
								variant={'primary'}
								disabled={isProcessingLogin}
								text="Login"
							/>

							<div className="text-center opacity-70">atau</div>

							{isProcessingLogin && <Skeleton containerClassName="block" height={38} />}
							{!isProcessingLogin && <ButtonLoginWithGoogle />}
						</div>

						<div className="text-center">
							<span className="opacity-70">Belum punya akun?</span>{' '}
							<Link className="text-primary hover:underline font-semibold" to={ROUTES.REGISTER.path}>
								Daftar
							</Link>
						</div>
					</div>
				</form>
			</div>

			<div className="py-4">
				<Link className="text-primary hover:underline font-semibold" to={ROUTES.HOME.path}>
					Kembali ke Beranda
				</Link>
			</div>
		</div>
	);
};

export default Login;
