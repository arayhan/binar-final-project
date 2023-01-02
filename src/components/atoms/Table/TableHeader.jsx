import { Link, useLocation } from 'react-router-dom';

export const TableHeader = ({ feature, featurePath, title, description, isReadonly, seeAllLink, showButtonCreate, showButtonSeeAll }) => {
	const location = useLocation();

	return (
		<div className="w-full flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
			<div className="w-full">
				<div className="text-xl font-light transform: capitalize">{title}</div>
				{description && <div className="text-sm text-gray-400">{description}</div>}
			</div>
			<div className="w-full flex flex-col md:justify-end md:flex-row gap-3">
				{showButtonSeeAll && seeAllLink && (
					<Link
						to={seeAllLink}
						className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 w-full lg:w-auto space-x-2 text-white px-5 py-3 rounded-sm transition-all text-center text-sm"
					>
						<span>Lihat Semua</span>
					</Link>
				)}
				{!isReadonly && showButtonCreate && (
					<Link
						to={`${featurePath || location.pathname}/create`}
						className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 w-full lg:w-auto space-x-2 text-white px-5 py-3 rounded-sm transition-all text-center text-sm"
					>
						<span>Create {feature}</span>
					</Link>
				)}
			</div>
		</div>
	);
};

TableHeader.defaultProps = {
	onClickButtonFilter: () => {}
};
