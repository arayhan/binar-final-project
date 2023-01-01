import { isImageURL, isPDFURL } from '@/utils/helpers';
import { useState } from 'react';
import { forwardRef } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { FaFilePdf } from 'react-icons/fa';
import { Button } from '../Button/Button';
import { InputError } from '../InputError/InputError';
import { InputLabel } from '../InputLabel/InputLabel';
import { ModalUpload } from '../Modal/ModalUpload';

export const InputUploadDirectWithModal = forwardRef(({ name, error, label, disabled, containerClassName, onUploaded }, ref) => {
	const [uploadedFileURL, setUploadedFileURL] = useState(null);
	const [showModal, setShowModal] = useState(false);

	const handlePreview = () => {
		if (uploadedFileURL) window.open(uploadedFileURL, '_blank');
	};

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
					className={`inline-block border ${error ? 'border-red-500' : ''} border-dashed rounded-md w-full text-center ${
						disabled ? 'opacity-50' : 'hover:cursor-pointer hover:bg-gray-100'
					}`}
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
					<div className="flex flex-col items-center justify-center space-y-6 w-full border border-gray-100 rounded-md p-8 h-48 md:h-40">
						{isPDFURL(uploadedFileURL) && (
							<div className="flex flex-col items-center justify-center gap-2 text-center">
								<FaFilePdf size={24} />
								<div className="opacity-50">{uploadedFileURL.split('/').pop()}</div>
							</div>
						)}
						{isImageURL(uploadedFileURL) && <img className="h-full object-cover" src={uploadedFileURL} alt={label} />}
					</div>
					<div className="flex justify-center gap-3">
						<Button disabled={disabled} variant="secondary" text="Preview" onClick={handlePreview} />
						<Button disabled={disabled} variant="primary" text="Ubah File" onClick={() => setShowModal(true)} />
					</div>
				</div>
			)}

			{error && <InputError message={error.message} />}
		</div>
	);
});

InputUploadDirectWithModal.displayName = 'InputUploadDirectWithModal';
InputUploadDirectWithModal.defaultProps = {
	onUploaded: () => {}
};
