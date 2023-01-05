import * as yup from 'yup';

export const loginSchema = yup.object().shape({
	email: yup.string().email('Email tidak valid').required('Email is required'),
	password: yup.string().required('Password is required')
});

export const registerSchema = yup.object().shape({
	phone: yup.string().required('Nomor ponsel is required'),
	email: yup.string().email('Email tidak valid').required('Email is required'),
	name: yup.string().required('Nama is required'),
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Password tidak sama')
		.required('Konfirmasi password is required')
});

export const searchFlightsSchema = yup.object().shape({
	iata_from: yup.string().required('Origin is required'),
	iata_to: yup
		.string()
		.required('Destinasi is required')
		.not([yup.ref('iata_from')], 'Departure and destination must differ'),
	date_departure: yup.string().required('Tanggal Keberangkatan is required')
});

export const bookingSchema = yup.object().shape({
	detail: yup.array().of(
		yup.object().shape({
			title: yup.string().required('Title is required'),
			passenger_name: yup.string().required('Nama lengkap is required'),
			phone: yup
				.string()
				.matches(/^[0-9]*$/, 'Nomor handphone tidak valid')
				.required('Nomor handphone is required'),
			nik: yup
				.string()
				.matches(/^\d{16}$/, 'NIK tidak valid')
				.required('NIK is required'),
			dob: yup.string().required('Tanggal lahir is required'),
			seat: yup.string().required('Nomor kursi is required'),
			visa: yup.mixed().required('Visa is required'),
			passport: yup.mixed().required('Passport is required'),
			izin: yup.mixed().required('Izin is required')
		})
	)
});

export const profilSchema = yup.object().shape({
	name: yup.string().required(''),
	address: yup.string().required('')
});

export const checkinSchema = yup.object().shape({
	flightCode: yup.string().required('Flight Code is required'),
	ticketNum: yup.string().required('Ticket Num is required'),
	passenger_name: yup.string().required('Passenger Name is required')
});

export const adminLoginSchema = yup.object().shape({
	username: yup.string().required('Username is required'),
	password: yup.string().required('Password is required')
});

export const formAdminAirportSchema = yup.object().shape({
	iata: yup.string().required('IATA is required'),
	name: yup.string().required('Name is required'),
	city: yup.string().required('City is required'),
	country: yup.string().required('Country is required'),
	latitude: yup.string().required('Latitude is required'),
	longitude: yup.string().required('Longitude is required')
});

export const formAdminProductSchema = yup.object().shape({
	iata_from: yup.string().required('IATA from is required'),
	iata_to: yup.string().required('IATA to is required'),
	date_departure: yup.string().required('Date Departure is required'),
	date_arrival: yup.string().required('Date Arrival is required'),
	est_time: yup.string().matches(/^\d+$/, 'Est harus berupa angka').required('Est Time is required'),
	price: yup.string().matches(/^\d+$/, 'Price harus berupa angka').required('Price is required'),
	gate: yup.string().matches(/^\d+$/, 'Gate harus berupa angka').required('Gate is required'),
	airplane_id: yup.string().matches(/^\d+$/, 'Airplane harus berupa angka').required('Airplane is required')
});
