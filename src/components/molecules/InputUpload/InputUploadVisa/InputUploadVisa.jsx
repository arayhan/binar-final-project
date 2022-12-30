import { Button, InputLabel, ModalUpload } from '@/components/atoms';
import { useState } from 'react';
import { forwardRef } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { FaCcVisa } from 'react-icons/fa';

export const InputUploadVisa = forwardRef(({ containerClassName, onUploaded }, ref) => {
	const [uploadedFileURL, setUploadedFileURL] = useState(null);
	const [showModal, setShowModal] = useState(false);

	const handleUploadedFile = (fileURL) => {
		setShowModal(false);
		setUploadedFileURL(fileURL);
		onUploaded(fileURL);
	};

	return (
		<div ref={ref} className={`space-y-2 ${containerClassName}`}>
			{showModal && <ModalUpload name="visa" onClose={() => setShowModal(false)} onUploaded={handleUploadedFile} />}
			{!uploadedFileURL && (
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
			)}

			{uploadedFileURL && (
				<div className="space-y-3">
					<InputLabel text="Upload Visa" />
					<div className="overflow-y-scroll max-h-40 w-full border border-gray-100">
						<img src={uploadedFileURL} alt="" />
					</div>
					<div className="flex justify-end">
						<Button variant="primary" text="Ubah File" onClick={() => setShowModal(true)} />
					</div>
				</div>
			)}
		</div>
	);
});

InputUploadVisa.displayName = 'InputUploadVisa';
InputUploadVisa.defaultProps = {
	onUploaded: () => {}
};
