import { InputText } from '@/components/atoms';
import { Button } from '@/components/atoms/Button/Button';
import { ACTION_ADMIN_AUTH } from '@/store/actions';
import { adminLoginSchema } from '@/utils/validation-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PATH } from '@/configs/routes';
import { notify } from 'react-notify-toast';

const AdminLogin = () => {
	const dispatch = useDispatch();

	const { actionAdminLogin } = ACTION_ADMIN_AUTH;

	const { isAdminProcessingLogin } = useSelector((state) => state.admin_auth);

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(adminLoginSchema),
		defaultValues: { username: '', password: '' }
	});

	const handleAdminLogin = (values) => {
		dispatch(
			actionAdminLogin(values, ({ success, message }) => {
				if (message) notify.show(message, success ? 'success' : 'error');
				if (success) window.location.href = PATH.ADMIN;
			})
		);
	};

	return (
		<div className="bg-secondary-200 flex flex-col justify-center items-center px-8 py-20 lg:px-20 space-y-4 min-h-screen">
			<div className="w-full bg-white shadow-md rounded-md max-w-screen-sm">
				<form onSubmit={handleSubmit(handleAdminLogin)}>
					<div className="space-y-3 p-8">
						<div className="text-3xl font-bold">Login as Admin</div>
						<div className="opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nam.</div>
					</div>

					<hr />

					<div className="space-y-6 px-10 py-6">
						<div className="space-y-4">
							<Controller
								name={'username'}
								control={control}
								render={({ field, fieldState: { error } }) => (
									<InputText {...field} label="Username" placeholder="Masukkan username" disabled={isAdminProcessingLogin} error={error} />
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
										disabled={isAdminProcessingLogin}
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
								disabled={isAdminProcessingLogin}
								text="Login"
							/>
						</div>
					</div>
				</form>
			</div>

			<div className="py-4">
				<Link className="text-primary hover:underline font-semibold" to={PATH.HOME}>
					Kembali ke Beranda
				</Link>
			</div>
		</div>
	);
};

export default AdminLogin;
