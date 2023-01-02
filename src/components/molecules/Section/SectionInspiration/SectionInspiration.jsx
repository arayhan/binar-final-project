import { DATA_INSPIRATIONS } from '@/data';
import { Link } from 'react-router-dom';

export const SectionInspiration = () => {
	return (
		<div className="bg-secondary-100">
			<div className="container py-20 space-y-8">
				<div className="space-y-3">
					<h1 className="text-4xl font-light">Dapatkan Inspirasimu di sini!</h1>
					<p>Temukan inspirasi dari berbagai destinasi yang kami tawarkan</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
					{DATA_INSPIRATIONS.map((inspiration) => (
						<Link to="/" className="relative flex items-end p-3 rounded-md overflow-hidden shadow-md h-80 group" key={inspiration.uuid}>
							<img
								className="absolute top-0 left-0 w-full h-full object-cover filter transition duration-500 transform group-hover:scale-110"
								src={inspiration.thumbnail}
								alt={inspiration.title}
							/>
							<div className="relative p-3 bg-white w-full rounded-md space-y-3">
								<div className="font-bold">{inspiration.title}</div>
								<div>
									<div className="text-sm text-gray-600">Harga Mulai Dari</div>
									<div className="font-bold text-lg text-primary">{inspiration.price}</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
