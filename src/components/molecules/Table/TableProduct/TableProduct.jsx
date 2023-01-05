import { ButtonAction, InputText, Table, TableFooter, TableHeader } from '@/components/atoms';
import { PATH } from '@/configs/routes';
import { ACTION_ADMIN_PRODUCT } from '@/store/actions';
import { ACTION_TYPES } from '@/utils/constants';
import { addQueryParams, queryStringToObject, removeQueryParams } from '@/utils/helpers';
import { useEffect, useState, useMemo } from 'react';
import { notify } from 'react-notify-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const TableProduct = ({
	title,
	displayedColumns,
	params,
	setParams,
	isReadonly,
	isShowFooter,
	isShowButtonSeeAll,
	isShowFilter,
	enableClickRow
}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { productList, fetchingProductList } = useSelector((state) => state.admin_product);

	const { actionGetAdminProductList, actionDeleteAdminProduct } = ACTION_ADMIN_PRODUCT;

	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(1);
	const [perPage, setPerPage] = useState(10);
	const [data, setData] = useState([]);

	const columns = useMemo(
		() => [
			{
				Header: '#',
				accessor: '',
				disableSortBy: true,
				disableFilters: true,
				maxWidth: 20,
				hidden: displayedColumns && !displayedColumns.includes('#'),
				Cell: (row) => <div className="text-gray-400">{Number(row.row.id) + (page - 1) * perPage + 1}</div>
			},
			{
				Header: 'Airport From',
				accessor: 'airport_from',
				width: '100%',
				minWidth: 300,
				hidden: displayedColumns && !displayedColumns.includes('Airport From')
			},
			{
				Header: 'Airport To',
				accessor: 'airport_to',
				width: '100%',
				minWidth: 300,
				hidden: displayedColumns && !displayedColumns.includes('Airport To')
			},
			{
				Header: 'Stock',
				accessor: 'stock',
				width: '100%',
				minWidth: 300,
				hidden: displayedColumns && !displayedColumns.includes('Stock')
			},
			{
				Header: 'Price',
				accessor: 'price',
				width: '100%',
				minWidth: 300,
				hidden: displayedColumns && !displayedColumns.includes('Price')
			},
			{
				Header: 'Airplane',
				accessor: 'airplane',
				width: '100%',
				minWidth: 300,
				hidden: displayedColumns && !displayedColumns.includes('Airplane')
			},
			{
				Header: 'Airline',
				accessor: 'airline',
				width: '100%',
				minWidth: 300,
				hidden: displayedColumns && !displayedColumns.includes('Airline')
			},
			{
				Header: 'Actions',
				minWidth: 400,
				hidden: isReadonly,
				Cell: (row) => {
					return (
						<div className="grid grid-cols-3 gap-2">
							<ButtonAction action={ACTION_TYPES.UPDATE} linkTo={`${PATH.ADMIN_PRODUCT}/update/${row.row.original.id}`} />
							<ButtonAction action={ACTION_TYPES.DELETE} onClick={() => deleteProduct(row.row.original.id)} />
						</div>
					);
				}
			}
		],
		[perPage, page]
	);

	const deleteProduct = (id) => {
		dispatch(
			actionDeleteAdminProduct(id, ({ success, message }) => {
				notify.show(message, success ? 'success' : 'error');
				if (success) dispatch(actionGetAdminProductList({ ...params, page }));
			})
		);
	};

	const handleSetFilter = (key, _params) => {
		const updatedParams = _params ? addQueryParams(location.search, _params) : removeQueryParams(location.search, key);
		if (setParams) setParams(queryStringToObject(updatedParams));
		else navigate('/admin/product' + updatedParams, { replace: true });
	};

	useEffect(() => {
		const defaultParams = { limit: perPage, page };

		dispatch(actionGetAdminProductList({ ...defaultParams, ...params }));
	}, [params, page, perPage]);

	useEffect(() => {
		if (productList) {
			setData(productList.result);
			setTotalPage(productList.totalPage);
		}
	}, [productList]);

	return (
		<div className="max-w-full bg-white rounded-md shadow-md">
			<div className="p-6 flex items-center justify-between">
				<TableHeader
					feature="Product"
					featurePath={PATH.ADMIN_PRODUCT}
					title={title || 'List Product'}
					description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium animi dolorum eveniet."
					isReadonly={isReadonly}
					showButtonCreate
					showButtonSeeAll={isShowButtonSeeAll}
				/>
			</div>
			{isShowFilter && (
				<>
					<hr />

					<div className="px-6 py-4">
						<div className="w-full flex justify-end gap-4">
							<InputText
								value={params?.keyword || ''}
								showLabel={false}
								placeholder="Cari nama product"
								onChange={(event) => {
									handleSetFilter('keyword', event.target.value ? { keyword: event.target.value } : undefined);
								}}
							/>
						</div>
					</div>
				</>
			)}
			<div className="overflow-x-scroll">
				<Table
					columns={columns}
					data={data}
					onClickRow={enableClickRow && handleClickRow}
					loading={fetchingProductList || productList === null}
				/>
			</div>
			{isShowFooter && (
				<div className="p-6">
					<TableFooter page={page} setPage={setPage} totalPage={totalPage} perPage={perPage} setPerPage={setPerPage} />
				</div>
			)}
		</div>
	);
};

TableProduct.defaultProps = {
	params: {},
	onClickRow: null,
	isShowFilter: true,
	isShowFooter: true,
	isReadonly: false,
	showButtonCreate: true
};
