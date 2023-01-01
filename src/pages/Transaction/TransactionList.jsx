import { Button } from '@/components/atoms';
import { PATH } from '@/configs/routes';
import { ACTION_TRANSACTION } from '@/store/actions';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import { notify } from 'react-notify-toast';
import { useDispatch, useSelector } from 'react-redux';
import { TransactionListItem, TransactionListItemSkeleton } from './components/TransactionListItem/TransactionListItem';

const TransactionList = ({ isShowBanner }) => {
	const dispatch = useDispatch();

	const [page] = useState(0);
	const [perPage] = useState(0);

	const { actionGetTransactionList } = ACTION_TRANSACTION;

	const { transactionList, fetchingTransactionList } = useSelector((state) => state.transaction);

	useEffect(() => {
		const defaultParams = { limit: perPage, page };

		dispatch(
			actionGetTransactionList({ ...defaultParams }, ({ success, message }) => {
				if (!success) notify.show(message, 'error');
			})
		);
	}, [page, perPage]);

	return (
		<div>
			{isShowBanner && (
				<div className="bg-primary">
					<div className="container py-32 text-white space-y-3">
						<Fragment>
							<div className="flex items-center text-4xl space-x-6">Your Transaction List</div>
							<div className="flex items-center opacity-70 space-x-1">Lihat dan tinjau pemesanan Anda.</div>
						</Fragment>
					</div>
				</div>
			)}

			<div className="bg-secondary-100">
				<div className="container py-14 pb-36">
					<div className="max-w-screen-lg mx-auto">
						{fetchingTransactionList && (
							<div className="space-y-4">
								<TransactionListItemSkeleton />
								<TransactionListItemSkeleton />
								<TransactionListItemSkeleton />
							</div>
						)}
						{!fetchingTransactionList && transactionList?.length === 0 && (
							<div className="w-full bg-white px-8 py-20 rounded-md flex flex-col items-center justify-center space-y-5">
								<img src={require('@/images/icons/popup_error.svg').default} alt="" />
								<div className="font-semibold">No transaction created yet</div>
								<Button variant="primary" text="Mari terbangin sekarang!" linkTo={PATH.FLIGHT} />
							</div>
						)}
						{!fetchingTransactionList && transactionList?.length > 0 && (
							<div className="space-y-4">
								{transactionList.map((transaction) => (
									<TransactionListItem
										key={transaction.id}
										amount={transaction.total}
										title={transaction.payment_id}
										date={transaction.createdAt}
										status={transaction.status}
										transactionID={transaction.payment_id}
									/>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

TransactionList.defaultProps = {
	isShowBanner: true
};

export default TransactionList;
