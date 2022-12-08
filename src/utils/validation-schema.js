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
	password: yup.string().required('Password wajib diisi')
});
