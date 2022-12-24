import { useState } from 'react';
import { ImTicket } from 'react-icons/im';

const FEATURES = [
	{ label: 'Book', icon: <ImTicket size={20} /> },
	{ label: 'Check In', icon: <ImTicket size={20} /> },
	{ label: 'Penerbangan Saya', icon: <ImTicket size={20} /> },
	{ label: 'Info ', icon: <ImTicket size={20} /> }
];

export const SectionFeatures = () => {
	const [activeFeature, setActiveFeature] = useState(FEATURES[0]);

	return (
		<div className="container py-20">
			<div className="grid grid-cols-4 gap-4">
				{FEATURES.map((feature) => (
					<button
						key={feature.label}
						className={`inline-flex flex-col justify-center items-center ${
							activeFeature.label === feature.label ? 'bg-primary text-white' : 'border border-primary text-primary'
						} rounded-md space-y-2 p-4`}
						onClick={() => setActiveFeature(feature)}
					>
						<div>{feature.icon}</div>
						<div>{feature.label}</div>
					</button>
				))}
			</div>
		</div>
	);
};
