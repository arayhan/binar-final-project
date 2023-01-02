import { ButtonAction, InputText, Table, TableFooter, TableHeader } from '@/components/atoms';
import { PATH } from '@/configs/routes';
import { ACTION_ADMIN_AIRPORT } from '@/store/actions';
import { ACTION_TYPES } from '@/utils/constants';
import { addQueryParams, queryStringToObject, removeQueryParams } from '@/utils/helpers';
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const TableAirport = ({
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

	const { airportList, fetchingAirportList } = useSelector((state) => state.admin_airport);

	const { actionGetAdminAirportList } = ACTION_ADMIN_AIRPORT;

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
				Header: 'Nama Airport',
				accessor: 'name',
				width: '100%',
				minWidth: 300,
				hidden: displayedColumns && !displayedColumns.includes('Nama Airport')
			},
			{
				Header: 'Kota',
				accessor: 'city',
				width: '100%',
				minWidth: 300,
				hidden: !displayedColumns || (displayedColumns && !displayedColumns.includes('Kota'))
			},
			{
				Header: 'IATA',
				minWidth: 180,
				accessor: 'iata',
				hidden: displayedColumns && !displayedColumns.includes('IATA')
			},
			{
				Header: 'Actions',
				minWidth: 400,
				hidden: isReadonly,
				Cell: (row) => {
					return (
						<div className="grid grid-cols-3 gap-2">
							<ButtonAction
								className="min-w-[100px] w-full"
								action={ACTION_TYPES.SEE_DETAIL}
								linkTo={`${PATH.ADMIN_AIRPORT}${row.row.original.id}`}
							/>
							<ButtonAction action={ACTION_TYPES.UPDATE} linkTo={`${PATH.ADMIN_AIRPORT}/update/${row.row.original.id}`} />
							<ButtonAction action={ACTION_TYPES.DELETE} onClick={() => deleteAirport(row.row.original.id)} />
						</div>
					);
				}
			}
		],
		[perPage, page]
	);

	const handleSetFilter = (key, _params) => {
		const updatedParams = _params ? addQueryParams(location.search, _params) : removeQueryParams(location.search, key);
		if (setParams) setParams(queryStringToObject(updatedParams));
		else navigate('/admin/airport' + updatedParams, { replace: true });
	};

	useEffect(() => {
		const defaultParams = { limit: perPage, page };

		dispatch(actionGetAdminAirportList({ ...defaultParams, ...params }));
	}, [params, page, perPage]);

	useEffect(() => {
		if (airportList) {
			setData(airportList.result);
			setTotalPage(airportList.totalPage);
		}
	}, [airportList]);

	return (
		<div className="max-w-full bg-white rounded-md shadow-md">
			<div className="p-6 flex items-center justify-between">
				<TableHeader
					feature="Airport"
					featurePath={PATH.ADMIN_AIRPORT}
					title={title || 'List Airport'}
					description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium animi dolorum eveniet."
					isReadonly={isReadonly}
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
								placeholder="Cari nama airport"
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
					loading={fetchingAirportList || airportList === null}
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

TableAirport.defaultProps = {
	params: {},
	onClickRow: null,
	isShowFilter: true,
	isShowFooter: true
};
