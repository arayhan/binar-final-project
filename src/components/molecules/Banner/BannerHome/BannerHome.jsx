import React from 'react';

export const BannerHome = () => {
	return (
		<div className="bg-[url('@/images/pictures/pulau_padar.jpg')] bg-slate-100 bg-fixed bg-no-repeat bg-cover bg-bottom bg-blend-multiply filter grayscale-[0.3]">
			<div className="container py-[16rem]">
				<div className="text-center">
					<div className="text-white filter drop-shadow-xl space-y-2">
						<div className="text-5xl">
							Hai, Mau <b className="font-bold">Terbang</b> Ke Mana?
						</div>
						<div className="text-xl md:text-2xl">Pilih destinasimu yuk!</div>
					</div>
				</div>
			</div>
		</div>
	);
};
