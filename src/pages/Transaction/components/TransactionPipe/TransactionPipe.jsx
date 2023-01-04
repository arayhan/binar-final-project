import { TRANSACTION_STATUS } from '@/utils/constants';
import { FiCheck } from 'react-icons/fi';
import './TransactionPipe.css';

const TransactionPipe = ({ currentStatus }) => {
	const isVerified = currentStatus === TRANSACTION_STATUS.SETTLEMENT.value;
	const isMenungguKonfirmasi = currentStatus === TRANSACTION_STATUS.PENDING.value || isVerified;

	return (
		<div className="transaction-pipe flex justify-between items-stretch">
			<div className="flex flex-1 flex-col items-center text-center text-sm">
				<div className="circle bg-primary flex items-center justify-center text-white">
					<FiCheck size={16} />
				</div>
				<div className="text-gray-500">Menunggu Pembayaran</div>
				<div className={`line ${isMenungguKonfirmasi ? 'bg-primary' : 'bg-gray-300'}`} />
			</div>
			<div className="flex flex-1 flex-col items-center text-center text-sm">
				{!isMenungguKonfirmasi && <div className="circle bg-gray-300" />}
				{isMenungguKonfirmasi && (
					<div className="circle bg-primary flex items-center justify-center text-white">
						<FiCheck size={16} />
					</div>
				)}
				<div className="text-gray-500">Pembayaran</div>
				<div className={`line ${isMenungguKonfirmasi ? 'bg-primary' : 'bg-gray-300'}`} />
			</div>
			<div className="flex flex-1 flex-col items-center text-center text-sm">
				{!isVerified && <div className="circle bg-gray-300" />}
				{isVerified && (
					<div className="circle bg-primary flex items-center justify-center text-white">
						<FiCheck size={16} />
					</div>
				)}
				<div className="text-gray-500">E-Ticket</div>
			</div>
		</div>
	);
};

export default TransactionPipe;
