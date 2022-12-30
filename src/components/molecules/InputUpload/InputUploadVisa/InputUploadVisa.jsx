import { useState } from 'react';
import { forwardRef } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { FaCcVisa } from 'react-icons/fa';
import { ModalUploadVisa } from '../../Modal/ModalUploadVisa/ModalUploadVisa';

export const InputUploadVisa = forwardRef(({ containerClassName }, ref) => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div ref={ref} className={`space-y-2 ${containerClassName}`}>
			{showModal && <ModalUploadVisa onClose={() => setShowModal(false)} />}
			<button
				className="inline-block border border-dashed rounded-md w-full text-center hover:bg-gray-100 hover:cursor-pointer"
				onClick={() => setShowModal(true)}
			>
				<div className="flex flex-col items-center justify-center p-8 space-y-4">
					<BiPlusCircle size={24} />
					<div className="flex items-center space-x-2">
						<span>Upload</span> <FaCcVisa size={28} />
					</div>
				</div>
			</button>
		</div>
	);
});

InputUploadVisa.displayName = 'InputUploadVisa';
