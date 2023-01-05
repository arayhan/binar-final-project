import { Button, InputDate, InputText } from '@/components/atoms';
import { PATH } from '@/configs/routes';
import { ACTION_ADMIN_PRODUCT } from '@/store/actions';
import { formAdminProductSchema } from '@/utils/validation-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { notify } from 'react-notify-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const AdminProductForm = () => {
	const { productID } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { productItem, fetchingProductItem, processingCreateProduct, productErrors } = useSelector((state) => state.admin_product);

	const { actionGetAdminProductItem, actionCreateAdminProduct, actionUpdateAdminProduct } = ACTION_ADMIN_PRODUCT;

	const { control, setValue, setError, handleSubmit } = useForm({
		resolver: yupResolver(formAdminProductSchema),
		defaultValues: {
			iata_from: '',
			iata_to: '',
			date_departure: '',
			date_arrival: '',
			est_time: 0,
			price: 0,
			gate: 0,
			airplane_id: 0
		}
	});

	const onSubmitProduct = (values) => {
		if (productID) {
			dispatch(
				actionUpdateAdminProduct(productID, values, ({ success, message }) => {
					notify.show(message, success ? 'success' : 'error');
					if (success) navigate(PATH.ADMIN_PRODUCT, { replace: true });
				})
			);
		} else {
			dispatch(
				actionCreateAdminProduct(values, ({ success, message }) => {
					notify.show(message, success ? 'success' : 'error');
					if (success) navigate(PATH.ADMIN_PRODUCT, { replace: true });
				})
			);
		}
	};

	useEffect(() => {
		if (productID) {
			dispatch(actionGetAdminProductItem(productID));
		}
	}, [productID]);

	useEffect(() => {
		if (productID && productItem) {
			setValue('iata_from', productItem.iata_from || '');
			setValue('iata_to', productItem.iata_to || '');
			setValue('date_departure', productItem.date_departure || '');
			setValue('date_arrival', productItem.date_arrival || '');
			setValue('est_time', productItem.est_time || '');
			setValue('price', productItem.price || '');
			setValue('gate', productItem.gate || '');
			setValue('airplane_id', productItem.airplane_id || '');
		}
	}, [productID, productItem]);

	return (
		<div className="p-4 space-y-6">
			<div>
				<div className="text-xl font-light transform: capitalize">Form Product</div>
			</div>
			<hr />
			<div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
				<Controller
					name="iata_from"
					control={control}
					render={({ field, fieldState: { error } }) => <InputText label="From" {...field} error={error} />}
				/>
				<Controller
					name="iata_to"
					control={control}
					render={({ field, fieldState: { error } }) => <InputText label="To" {...field} error={error} />}
				/>
				<Controller
					name="date_departure"
					control={control}
					render={({ field, fieldState: { error } }) => <InputDate label="Departure" {...field} error={error} />}
				/>
				<Controller
					name="date_arrival"
					control={control}
					render={({ field, fieldState: { error } }) => <InputDate label="Arrival" {...field} error={error} />}
				/>
				<Controller
					name="est_time"
					control={control}
					render={({ field, fieldState: { error } }) => <InputText helper="In Hours" label="Estimation Time" {...field} error={error} />}
				/>
				<Controller
					name="est_time"
					control={control}
					render={({ field, fieldState: { error } }) => <InputText helper="In Hours" label="Estimation Time" {...field} error={error} />}
				/>
				<Controller
					name="est_time"
					control={control}
					render={({ field, fieldState: { error } }) => <InputText helper="In Hours" label="Estimation Time" {...field} error={error} />}
				/>
			</div>
			<hr />
			<div className="flex justify-end gap-4">
				<Button variant="danger" disabled={processingCreateProduct || fetchingProductItem || productErrors} linkTo={PATH.ADMIN_PRODUCT}>
					Cancel
				</Button>
				<Button
					variant="primary"
					disabled={processingCreateProduct || fetchingProductItem || productErrors}
					onClick={handleSubmit(onSubmitProduct)}
				>
					Submit
				</Button>
			</div>
		</div>
	);
};

export default AdminProductForm;
