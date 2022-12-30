import { Button, InputLabel, ModalUpload } from '@/components/atoms';
import { useState } from 'react';
import { forwardRef } from 'react';
import { BiPlusCircle } from 'react-icons/bi';

export const InputUpload = forwardRef(({ name, label, containerClassName, onUploaded }, ref) => {
	const [uploadedFileURL, setUploadedFileURL] = useState(null);
	const [showModal, setShowModal] = useState(false);

	const handleUploadedFile = (fileURL) => {
		setShowModal(false);
		setUploadedFileURL(fileURL);
		onUploaded(fileURL);
	};

	return (
		<div ref={ref} className={`space-y-2 ${containerClassName}`}>
			{showModal && <ModalUpload name={name} onClose={() => setShowModal(false)} onUploaded={handleUploadedFile} />}

			<InputLabel text={label} />
			{!uploadedFileURL && (
				<button
					className="inline-block border border-dashed rounded-md w-full text-center hover:bg-gray-100 hover:cursor-pointer"
					onClick={() => setShowModal(true)}
				>
					<div className="flex flex-col items-center justify-center p-8 space-y-4">
						<BiPlusCircle size={24} />
						<div className="flex items-center space-x-2">
							<span>{label || 'Upload File'}</span>
						</div>
					</div>
				</button>
			)}

			{uploadedFileURL && (
				<div className="space-y-3">
					<div className="overflow-y-scroll max-h-48 md:max-h-36 w-full border border-gray-100">
						<img src={uploadedFileURL} alt="" />
					</div>
					<div className="flex justify-center">
						<Button variant="primary" text="Ubah File" onClick={() => setShowModal(true)} />
					</div>
				</div>
			)}
		</div>
	);
});

InputUpload.displayName = 'InputUpload';
InputUpload.defaultProps = {
	onUploaded: () => {}
};
