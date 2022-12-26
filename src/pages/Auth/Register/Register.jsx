import { ButtonLoginWithGoogle, InputText } from '@/components/atoms';
import { Button } from '@/components/atoms/Button/Button';
import { ACTION_AUTH } from '@/store/actions';
import { registerSchema } from '@/utils/validation-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import Skeleton from 'react-loading-skeleton';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { PATH } from '@/configs/routes';
=======
import { ROUTES } from '@/configs/routes';
import { notify } from 'react-notify-toast';
>>>>>>> f815a059df4c28e5fbbeb520b2e0ef557757d6b5

const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { actionRegister } = ACTION_AUTH;
	const { isProcessingRegister } = useSelector((state) => state.auth);

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(registerSchema),
		defaultValues: { phone: '', email: '', name: '', username: '', password: '', confirmPassword: '' }
	});

	const handleRegister = (values) => {
		dispatch(
			actionRegister(values, ({ success, message }) => {
<<<<<<< HEAD
				if (success) navigate(PATH.LOGIN);
=======
				if (success) navigate(ROUTES.LOGIN.path);
>>>>>>> f815a059df4c28e5fbbeb520b2e0ef557757d6b5
				notify.show(message, success ? 'success' : 'error');
			})
		);
	};

	return (
		<div className="flex flex-col justify-center items-center px-8 py-20 lg:px-20 space-y-4 lg:min-h-screen">
			<div className="w-full bg-white shadow-md rounded-md">
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
									<InputText {...field} label="Phone" placeholder="Masukkan nomor ponsel" disabled={isProcessingRegister} error={error} />
								)}
							/>
							<Controller
								name={'email'}
								control={control}
								render={({ field, fieldState: { error } }) => (
									<InputText {...field} label="Email" placeholder="Masukkan email" disabled={isProcessingRegister} error={error} />
								)}
							/>
							<Controller
								name={'name'}
								control={control}
								render={({ field, fieldState: { error } }) => (
									<InputText {...field} label="Name" placeholder="Masukkan nama" disabled={isProcessingRegister} error={error} />
								)}
							/>
							<Controller
								name={'username'}
								control={control}
								render={({ field, fieldState: { error } }) => (
									<InputText {...field} label="Username" placeholder="Masukkan username" disabled={isProcessingRegister} error={error} />
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
							<Controller
								name={'confirmPassword'}
								control={control}
								render={({ field, fieldState: { error } }) => (
									<InputText
										{...field}
										type="password"
										label="Password"
										placeholder="Masukkan konfirmasi password"
										disabled={isProcessingRegister}
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
								disabled={isProcessingRegister}
								text="Register"
							/>

							<div className="text-center opacity-70">atau</div>

							{isProcessingRegister && <Skeleton containerClassName="block" height={38} />}
							{!isProcessingRegister && <ButtonLoginWithGoogle />}
						</div>

						<div className="text-center">
							<span className="opacity-70">Sudah punya akun?</span>{' '}
<<<<<<< HEAD
							<Link className="text-primary hover:underline font-semibold" to={PATH.LOGIN}>
=======
							<Link className="text-primary hover:underline font-semibold" to={ROUTES.LOGIN.path}>
>>>>>>> f815a059df4c28e5fbbeb520b2e0ef557757d6b5
								Login
							</Link>
						</div>
					</div>
				</form>
			</div>

			<div className="py-4">
<<<<<<< HEAD
				<Link className="text-primary hover:underline font-semibold" to={PATH.HOME}>
=======
				<Link className="text-primary hover:underline font-semibold" to={ROUTES.HOME.path}>
>>>>>>> f815a059df4c28e5fbbeb520b2e0ef557757d6b5
					Kembali ke Beranda
				</Link>
			</div>
		</div>
	);
};

export default Register;
