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
});

export const searchFlightsSchema = yup.object().shape({
	iata_from: yup.string().required('Origin wajib diisi'),
	iata_to: yup
		.string()
		.required('Destinasi wajib diisi')
		.not([yup.ref('iata_from')], 'Departure and destination must differ'),
	date_departure: yup.string().required('Tanggal Keberangkatan wajib diisi')
});

export const bookingSchema = yup.object().shape({
	details: yup.array().of(
		yup.object().shape({
			title: yup.string().required('Title harus diisi'),
			passenger_name: yup.string().required('Nama lengkap harus diisi'),
			phone: yup.string().required('Nomor handphone harus diisi'),
			nik: yup.string().required('NIK harus diisi'),
			dob: yup.string().required('Tanggal lahir harus diisi'),
			seat: yup.string().required('Nomor kursi harus diisi'),
			visa: yup.string().required('Visa harus diisi'),
			passport: yup.string().required('Passport harus diisi'),
			izin: yup.string().required('Izin harus diisi')
		})
	)
});
