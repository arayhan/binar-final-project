import { useState, useEffect } from 'react';
import './TablePriceList.css';
import { formatRupiah } from '@/utils/helpers';

export const TablePriceList = ({ items }) => {
	const [total, setTotal] = useState(0);

	useEffect(() => {
		if (items.length > 0) setTotal(items.reduce((acc, item) => acc + item.value, 0));
	});

	return (
		<div>
			{items && (
				<table className="price-list text-sm text-gray-700 w-full">
					<tbody>
						{items?.map((item) => (
							<tr key={item.title}>
								<td>{item.title}</td>
								{item.value >= 0 && <td>{formatRupiah(item.value)}</td>}
								{item.value < 0 && <td className="text-red-500">- {formatRupiah(Math.abs(item.value))}</td>}
							</tr>
						))}

						<tr className="border-t">
							<td>Total</td>
							<td className="font-semibold">{total > 0 ? `${formatRupiah(Math.abs(total))}` : 'GRATIS'}</td>
						</tr>
					</tbody>
				</table>
			)}
		</div>
	);
};
