import { Button, TablePriceList } from '@/components/atoms';
import { PATH } from '@/configs/routes';
import { ACTION_TRANSACTION } from '@/store/actions';
import { TRANSACTION_STATUS } from '@/utils/constants';
import { formatRupiah, queryStringToObject } from '@/utils/helpers';
import moment from 'moment';
import { useEffect } from 'react';
import { Fragment } from 'react';
import { BiLoaderAlt } from 'react-icons/bi';
import Skeleton from 'react-loading-skeleton';
import { notify } from 'react-notify-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import TransactionPipe from './components/TransactionPipe/TransactionPipe';

const TransactionItem = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const params = useParams();
	const location = useLocation();

	const { transactionID } = params;
	const { actionGetTransactionItem } = ACTION_TRANSACTION;

	const { transactionItem, fetchingTransactionItem } = useSelector((state) => state.transaction);

	const handleRedirectToPaymentLink = (paymentLink) => {
		window.open(paymentLink, '_blank');
	};

	useEffect(() => {
		if (location.search && !transactionID) {
			const { order_id } = queryStringToObject(location.search);
			navigate(`${PATH.TRANSACTION}/${order_id}`, true);
		} else if (transactionID) {
			dispatch(
				actionGetTransactionItem(transactionID, ({ success, message }) => {
					if (!success) notify.show(message, 'error');
				})
			);
		}
	}, [transactionID, location]);

	return (
		<div>
			<div className="bg-primary">
				<div className="container py-32 text-white space-y-3">
					<Fragment>
						<div className="flex items-center text-4xl space-x-6">Your Transaction</div>
						<div className="flex items-center opacity-70 space-x-1">Lihat dan tinjau pemesanan Anda.</div>
					</Fragment>
				</div>
			</div>

			<div className="bg-gray-100">
				<div className="container py-20 pb-36">
					<div>
						<div className="flex items-start gap-5">
							<div className="bg-white w-1/3 rounded-md hidden md:block">
								<div className="p-5 border-b space-y-3">
									<div>
										<div className="font-semibold mb-1 text-sm">Payment ID</div>
										{fetchingTransactionItem && <Skeleton className="w-full h-5" />}
										{!fetchingTransactionItem && transactionItem && <div className="text-gray-500">{transactionItem.payment_id}</div>}
									</div>
									<div>
										<div className="font-semibold mb-1 text-sm">Tanggal Pembelian</div>
										{fetchingTransactionItem && <Skeleton className="w-full h-5" />}
										{!fetchingTransactionItem && transactionItem && (
											<Fragment>
												{!transactionItem?.createdAt && <div>-</div>}
												{transactionItem?.createdAt && (
													<div className="text-gray-500">{moment(transactionItem.createdAt).format('DD MMMM YYYY')}</div>
												)}
											</Fragment>
										)}
									</div>
									<div>
										<div className="font-semibold mb-1 text-sm">Status</div>
										{fetchingTransactionItem && <Skeleton className="w-full h-5" />}
										{!fetchingTransactionItem && transactionItem && (
											<Fragment>
												{!transactionItem?.status && <div>-</div>}
												{transactionItem?.status && <div className="text-gray-500 uppercase">{transactionItem.status}</div>}
											</Fragment>
										)}
									</div>
								</div>
							</div>

							{fetchingTransactionItem && (
								<div className="w-full bg-white px-8 py-20 rounded-md flex flex-col items-center justify-center space-y-3">
									<BiLoaderAlt className="animate-spin text-primary" size={24} />
									<div>Loading transaction data...</div>
								</div>
							)}

							{!fetchingTransactionItem && !transactionItem && (
								<div className="w-full bg-white px-8 py-20 rounded-md flex flex-col items-center justify-center space-y-5">
									<img src={require('@/images/icons/popup_error.svg').default} alt="" />
									<div className="font-semibold">Transaksi tidak ditemukan</div>
									<Button variant="primary" text="Lihat List Transaksi" linkTo={PATH.TRANSACTION} />
								</div>
							)}

							{!fetchingTransactionItem && transactionItem && (
								<div className="w-full space-y-3">
									{(transactionItem.status === TRANSACTION_STATUS.UNPAID.value ||
										transactionItem.status === TRANSACTION_STATUS.PENDING.value ||
										transactionItem.status === TRANSACTION_STATUS.SETTLEMENT) && (
										<div className="w-full bg-white p-8 rounded-md">
											<TransactionPipe currentStatus={transactionItem.status} />
										</div>
									)}

									{transactionItem.status === TRANSACTION_STATUS.UNPAID.value && (
										<>
											<div className="w-full bg-white p-8 rounded-md">
												<div className="text-center mb-6 text-gray-500 text-sm">Segera Lakukan Pembayaran</div>
												<div className="relative text-center mb-6">
													<span className="font-semibold text-xl">
														<span>Rp {formatRupiah(transactionItem.total).slice(0, -3)}</span>
														<span className="text-red-500">{formatRupiah(transactionItem.total).slice(-3)}</span>
													</span>
												</div>
												<div className="flex items-center bg-gray-100 rounded-md px-5 py-3 mb-10">
													<img className="w-6 mr-3" src={require('@/images/icons/info.png')} alt="" />
													<div className="text-sm">
														<span className="text-red-500 font-semibold">Penting!</span> Mohon transfer tepat sampai 3 angka terakhir
													</div>
												</div>
											</div>

											<div className="w-full bg-white p-8 rounded-md">
												<div className="text-center text-sm mb-6">Lakukan pembayaran pada link berikut :</div>
												<Button
													variant="primary"
													className="w-full px-6 py-3 rounded-md"
													onClick={() => handleRedirectToPaymentLink(transactionItem.payment_link)}
												>
													Bayar Sekarang
												</Button>
											</div>
										</>
									)}

									{transactionItem.status === TRANSACTION_STATUS.SETTLEMENT.value && (
										<div className="w-full bg-white rounded-md flex flex-col items-center p-8">
											<img className="mb-6 w-32" src={require('@/images/icons/popup_berhasil.svg').default} alt="Menunggu konfirmasi sistem" />
											<div className="mb-3 font-semibold">Pembayaran Berhasil</div>
											<span className="text-sm text-gray-500">Lihat E-Ticketmu Sekarang!</span>
										</div>
									)}

									{transactionItem.status === TRANSACTION_STATUS.PENDING.value && (
										<div className="w-full bg-white rounded-md flex flex-col items-center p-8">
											<img className="mb-6" src={require('@/images/icons/asset_time.svg').default} alt="Menunggu konfirmasi sistem" />
											<div className="mb-3 font-semibold">Pembayaran Sedang Diproses</div>
											<span className="text-sm text-gray-500">Mohon tunggu, sedang proses konfirmasi sistem.</span>
										</div>
									)}

									{(transactionItem.status === TRANSACTION_STATUS.EXPIRE.value ||
										transactionItem.status === TRANSACTION_STATUS.CANCEL.value ||
										transactionItem.status === TRANSACTION_STATUS.FRAUD.value) && (
										<div className="w-full bg-white rounded-md flex flex-col items-center px-24 py-8">
											<img className="mb-6 w-32" src={require('@/images/icons/popup_error.svg').default} alt="Pembayaran gagal" />
											<div className="mb-3 font-semibold">
												{transactionItem.status === TRANSACTION_STATUS.CANCEL.value && 'Pembayaran telah dibatalkan'}
												{transactionItem.status === TRANSACTION_STATUS.EXPIRE.value && 'Mohon Maaf, Waktu Pembayaran Anda Sudah Habis'}
											</div>
											{transactionItem.status !== TRANSACTION_STATUS.CANCEL.value && (
												<span className="text-sm text-gray-500 text-center">
													Jika Anda merasa sudah melakukan transfer, harap hubungi customer service kami
												</span>
											)}
										</div>
									)}

									<div className="w-full bg-white p-8 rounded-md space-y-3">
										<div className="font-semibold text-lg">Detail Pemesanan</div>

										<div className="space-y-5">
											<table className="w-full text-sm">
												<tbody>
													<tr>
														<td>Flight Code</td>
														<td className="font-semibold">{transactionItem?.product?.flightCode || '-'}</td>
													</tr>
													<tr>
														<td>Gate</td>
														<td className="font-semibold">{transactionItem?.product?.gate || '-'}</td>
													</tr>
													<tr>
														<td>Nomor Tagihan</td>
														<td className="font-semibold">{transactionItem?.payment_id || '-'}</td>
													</tr>
													<tr>
														<td>Tanggal Pembelian</td>
														<td className="font-semibold">
															{transactionItem?.createdAt ? moment(transactionItem.createdAt).format('DD MMMM YYYY') : '-'}
														</td>
													</tr>
												</tbody>
											</table>

											<hr />

											{transactionItem?.bookingDetail?.map((passenger) => (
												<table key={passenger.id} className="w-full text-sm">
													<tbody>
														<tr>
															<td>Name</td>
															<td className="font-semibold">
																{passenger.title} {passenger.passenger_name}
															</td>
														</tr>
														<tr>
															<td>Checked In</td>
															<td className="font-semibold">{passenger.isCheckIn ? '✅' : '❌'}</td>
														</tr>
														<tr>
															<td>Phone</td>
															<td className="font-semibold">{passenger.phone}</td>
														</tr>
														<tr>
															<td>NIK</td>
															<td className="font-semibold">{passenger.nik}</td>
														</tr>
														<tr>
															<td>Seat</td>
															<td className="font-semibold">{passenger.seat}</td>
														</tr>
														<tr>
															<td>Ticket Num</td>
															<td className="font-semibold">{passenger.ticketNum}</td>
														</tr>
													</tbody>
												</table>
											))}

											<hr />

											<TablePriceList
												items={[
													{ title: `${transactionItem.product.iata_from} - ${transactionItem.product.iata_to}`, value: transactionItem.total }
												]}
											/>

											{transactionItem.eticket && (
												<>
													<hr />
													<div className="mt-6 space-y-3">
														<Button className="w-full" variant="secondary">
															Lihat E-Tiket
														</Button>
													</div>
												</>
											)}
										</div>
									</div>
								</div>
							)}

							{!fetchingTransactionItem && transactionItem && transactionItem.status === TRANSACTION_STATUS.UNPAID.value && (
								<div
									className="fixed bottom-0 left-1/2 transform -translate-x-1/2 max-w-screen-md w-full bg-white p-5"
									style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.15)' }}
								>
									<div className="text-sm text-center mb-3">Selesaikan transkasimu melalui link berikut</div>
									<Button
										variant="primary"
										className="w-full px-6 py-3 rounded-md"
										onClick={() => handleRedirectToPaymentLink(transactionItem.payment_link)}
									>
										Bayar Sekarang
									</Button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TransactionItem;
