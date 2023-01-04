import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { PATH } from '@/configs/routes';
import { formatRupiah } from '@/utils/helpers';
import { TRANSACTION_STATUS, TRANSACTION_STATUS_OPTIONS } from '@/utils/constants';

export const TransactionListItem = ({ title, date, transactionID, amount, status }) => {
	return (
		<Link to={`${PATH.TRANSACTION}/${transactionID}`} className="rounded-md shadow-md bg-white flex flex-col p-6 space-y-3 hover:bg-gray-50">
			<div className="flex justify-between">
				<div className="text-gray-500 text-sm">Dibuat pada : {moment(date).format('DD MMMM YYYY')}</div>
			</div>

			<div className="font-semibold text-xl">{title}</div>
			<div className="text-sm text-gray-500 font-semibold pb-3">ID Transaksi : {transactionID}</div>
			<div className="flex justify-between">
				<div className="text-primary-500 text-lg font-semibold">{amount > 0 ? formatRupiah(amount) : 'GRATIS'}</div>

				{TRANSACTION_STATUS_OPTIONS.map((option) => {
					let statusClassName = 'text-green-500';

					if (status === TRANSACTION_STATUS.CANCEL.value || status === TRANSACTION_STATUS.EXPIRE.value) {
						statusClassName = 'text-red-500';
					} else if (status === TRANSACTION_STATUS.UNPAID.value || status === TRANSACTION_STATUS.PENDING.value) {
						statusClassName = 'text-yellow-500';
					}

					return (
						option.value === status && (
							<div key={option.value} className={`text-right text-lg font-semibold ${statusClassName}`}>
								{option.label}
							</div>
						)
					);
				})}
			</div>
		</Link>
	);
};

export const TransactionListItemSkeleton = () => {
	return (
		<div className="rounded-md shadow-md bg-white flex flex-col p-6">
			<Skeleton className="w-16" />
			<Skeleton className="w-1/2" />
			<Skeleton className="w-1/3" />
			<div className="flex justify-between">
				<Skeleton className="w-24" />
				<Skeleton className="w-16" />
			</div>
		</div>
	);
};
