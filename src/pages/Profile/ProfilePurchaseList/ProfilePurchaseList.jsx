import TransactionList from '@/pages/Transaction/TransactionList';
import { useState } from 'react';

const Purchases = [
	{ label: 'Last 90 Days' },
	{ label: 'Desember 2022' },
	{ label: 'November 2022' },
	{ label: 'Set the Date' },
	{ label: 'filter', margin: true }
];

const PurchaseList = () => {
	const [activePurchase, setActivePurchase] = useState(Purchases[0]);

	return (
		<div className="container">
			<div className="grid lg:grid-cols-5 gap-4 mt-4">
				{Purchases.map((purchase) => (
					<button
						key={purchase.label}
						className={`${purchase.margin && 'mx-8'} inline-flex flex-col items-center ${
							activePurchase.label === purchase.label ? 'bg-primary text-white' : 'border border-black text-black'
						} rounded-md space-y-2 p-2`}
						onClick={() => setActivePurchase(purchase)}
					>
						<div>{purchase.label}</div>
					</button>
				))}
			</div>
			<div className="rounded-md">
				<TransactionList isShowBanner={false} />
			</div>
		</div>
	);
};

export default PurchaseList;
