import * as yup from 'yup';

export const loginSchema = yup.object().shape({
	email: yup.string().email('Email tidak valid').required('Email wajib diisi'),
	password: yup.string().required('Password wajib diisi')
});

export const registerSchema = yup.object().shape({
	phone: yup.string().required('Nomor ponsel wajib diisi'),
	email: yup.string().email('Email tidak valid').required('Email wajib diisi'),
	name: yup.string().required('Nama wajib diisi'),
	username: yup.string().required('Username wajib diisi'),
	password: yup.string().required('Password wajib diisi'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Password tidak sama')
		.required('Konfirmasi password harus diisi')
<<<<<<< HEAD
});

export const profilSchema = yup.object().shape({
	name: yup.string().required('Full Name'),
	address: yup.string().required('City of Residence')
=======
>>>>>>> f815a059df4c28e5fbbeb520b2e0ef557757d6b5
});
