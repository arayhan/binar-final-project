import { Button, InputText } from '@/components/atoms';
import { PATH } from '@/configs/routes';
import { ACTION_ADMIN_AIRPORT } from '@/store/actions';
import { formAdminAirportSchema } from '@/utils/validation-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { notify } from 'react-notify-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const AdminAirportForm = () => {
	const { airportID } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { airportItem, fetchingAirportItem, processingCreateAirport, airportErrors } = useSelector((state) => state.admin_airport);

	const { actionGetAdminAirportItem, actionCreateAdminAirport, actionUpdateAdminAirport } = ACTION_ADMIN_AIRPORT;

	const { control, setValue, handleSubmit } = useForm({
		resolver: yupResolver(formAdminAirportSchema),
		defaultValues: {
			iata: '',
			name: '',
			city: '',
			country: '',
			latitude: '',
			longitude: ''
		}
	});

	const onSubmitAirport = (values) => {
		if (airportID) {
			dispatch(
				actionUpdateAdminAirport(airportID, values, ({ success, message }) => {
					notify.show(message, success ? 'success' : 'error');
					if (success) navigate(PATH.ADMIN_AIRPORT, { replace: true });
				})
			);
		} else {
			dispatch(
				actionCreateAdminAirport(values, ({ success, message }) => {
					notify.show(message, success ? 'success' : 'error');
					if (success) navigate(PATH.ADMIN_AIRPORT, { replace: true });
				})
			);
		}
	};

	useEffect(() => {
		if (airportID) {
			dispatch(actionGetAdminAirportItem(airportID));
		}
	}, [airportID]);

	useEffect(() => {
		if (airportID && airportItem) {
			setValue('iata', airportItem.iata || '');
			setValue('name', airportItem.name || '');
			setValue('city', airportItem.city || '');
			setValue('country', airportItem.country || '');
			setValue('latitude', airportItem.latitude || '');
			setValue('longitude', airportItem.longitude || '');
		}
	}, [airportID, airportItem]);

	return (
		<div className="p-4 space-y-6">
			<div>
				<div className="text-xl font-light transform: capitalize">Form Airport</div>
			</div>
			<hr />
			<div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
				<Controller
					name="iata"
					control={control}
					render={({ field, fieldState: { error } }) => <InputText label="IATA" {...field} error={error} />}
				/>
				<Controller
					name="name"
					control={control}
					render={({ field, fieldState: { error } }) => <InputText label="Name" {...field} error={error} />}
				/>
				<Controller
					name="country"
					control={control}
					render={({ field, fieldState: { error } }) => <InputText label="Country" {...field} error={error} />}
				/>
				<Controller
					name="city"
					control={control}
					render={({ field, fieldState: { error } }) => <InputText label="City" {...field} error={error} />}
				/>
				<Controller
					name="latitude"
					control={control}
					render={({ field, fieldState: { error } }) => <InputText label="Latitude" {...field} error={error} />}
				/>
				<Controller
					name="longitude"
					control={control}
					render={({ field, fieldState: { error } }) => <InputText label="Longitude" {...field} error={error} />}
				/>
			</div>
			<hr />
			<div className="flex justify-end gap-4">
				<Button variant="danger" disabled={processingCreateAirport || fetchingAirportItem || airportErrors} linkTo={PATH.ADMIN_AIRPORT}>
					Cancel
				</Button>
				<Button
					variant="primary"
					disabled={processingCreateAirport || fetchingAirportItem || airportErrors}
					onClick={handleSubmit(onSubmitAirport)}
				>
					Submit
				</Button>
			</div>
		</div>
	);
};

export default AdminAirportForm;
