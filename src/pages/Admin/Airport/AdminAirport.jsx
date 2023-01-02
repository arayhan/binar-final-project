import { TableAirport } from '@/components/molecules';
import { queryStringToObject } from '@/utils/helpers';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const AdminAirport = () => {
	const { search } = useLocation();

	const [params, setParams] = useState(search ? queryStringToObject(search) : {});

	useEffect(() => {
		setParams(search ? queryStringToObject(search) : {});
	}, [search]);

	return (
		<div className="p-4">
			<TableAirport params={params} isShowFilter={false} />
		</div>
	);
};

export default AdminAirport;
