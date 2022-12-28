import { Fragment } from 'react';
import { BsPlus } from 'react-icons/bs';
import Skeleton from 'react-loading-skeleton';

const Booking = () => {
	const fetching = false;

	return (
		<div>
			<div className="bg-primary">
				<div className="container py-32 text-white space-y-3">
					{fetching && <SkeletonBanner />}
					{!fetching && (
						<Fragment>
							<div className="flex items-center text-4xl space-x-6">Your Booking</div>
							<div className="flex items-center opacity-70 space-x-1">Isi detail Anda dan tinjau pemesanan Anda.</div>
						</Fragment>
					)}
				</div>
			</div>

			<div className="bg-gray-100">
				<div className="container max-w-screen-lg py-20">
					<div className="space-y-8">
						<div className="flex items-center justify-between">
							<div className="text-2xl">Passengers</div>
							<button className="bg-primary hover:bg-primary-400 transition-all text-white px-4 py-3 space-x-2 rounded-md flex items-center justify-center">
								<BsPlus size={20} />
								<span>Add Person</span>
							</button>
						</div>
						<div className="space-y-6">
							<div className="bg-white rounded-md shadow-md">
								<div className="flex items-center justify-between px-6 py-4 border-b">
									<div>Person 1</div>
									<div>
										<button className="text-primary font-bold hover:text-primary-400">Save</button>
									</div>
								</div>
								<div className="p-6 space-y-6">
									<div className="text-secondary-800 space-y-2">
										<div>
											Make sure that the passenger&apos;s name is exactly as written in the government issued ID/Passport/Driving License.{' '}
										</div>
										<div>Avoid any mistake, because some airlines don&apos;t allow name corrections after booking.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const SkeletonBanner = () => (
	<div className="flex flex-col space-y-3 opacity-30">
		<Skeleton inline className="w-1/2" height={28} />
		<Skeleton inline className="w-1/3" />
	</div>
);

export default Booking;
