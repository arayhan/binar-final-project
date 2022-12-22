import React from 'react';
import { CardFormBooking } from '../../Card/CardFormBooking/CardFormBooking';

export const BannerHome = () => {
	return (
		<div className="bg-[url('@/images/pictures/pulau_padar.jpg')] bg-slate-100 bg-fixed bg-no-repeat bg-cover bg-bottom bg-blend-multiply filter grayscale-[0.3]">
			<div className="container py-32">
				<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
					<CardFormBooking />
				</div>
			</div>
		</div>
	);
};
