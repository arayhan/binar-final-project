import { ACTION_TRANSACTION } from '@/store/actions';
import { isImage, isPDF } from '@/utils/helpers';
import { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { RiErrorWarningFill } from 'react-icons/ri';
import { notify } from 'react-notify-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../Button/Button';
import { Modal } from './Modal';

export const ModalUpload = ({ name, onClose, onUploaded }) => {
	const dispatch = useDispatch();

	const { actionUploadDocument } = ACTION_TRANSACTION;

	const { processingUploadDocument } = useSelector((state) => state.transaction);

	const [selectedFile, setSelectedFile] = useState(null);
	const [error, setError] = useState(null);

	const handlePreview = () => {
		if (selectedFile) {
			const url = URL.createObjectURL(selectedFile);
			window.open(url, '_blank');
		}
	};

	const handleUploadFile = () => {
		if (selectedFile) {
			dispatch(
				actionUploadDocument(selectedFile, ({ success, message, response }) => {
					notify.show(message, success ? 'success' : 'error');
					if (success) onUploaded(response.url);
				})
			);
		}
	};

	const handleChangeFile = (event) => {
		const file = event.target.files[0];

		if (file && !isImage(file) && !isPDF(file)) {
			const message = 'File harus berupa gambar atau pdf';

			notify.show(message, 'warning');
			setError(message);
			return;
		}

		setError(null);
		setSelectedFile(file);

		event.preventDefault();
	};

	return (
		<Modal
			title="Upload File"
			description="Pastikan file yang Anda input valid"
			isLoading={processingUploadDocument}
			onClose={onClose}
			onSubmit={handleUploadFile}
			submitButtonText="Upload"
		>
			{error && (
				<div className="text-red-500 text-sm mb-3 flex items-center space-x-3 justify-start bg-red-50 p-2 rounded-md">
					<div className="w-4">
						<RiErrorWarningFill size={18} />
					</div>
					<span>{error}</span>
				</div>
			)}
			<form className="space-y-4">
				{!selectedFile && (
					<label
						className="inline-block border border-dashed rounded-md w-full text-center hover:bg-gray-100 hover:cursor-pointer"
						htmlFor={name}
					>
						<div className="flex flex-col items-center justify-center p-8 space-y-4">
							<div className="flex items-center space-x-2">
								<span className="text-gray-500 font-semibold">Pilih File</span>
							</div>
						</div>
					</label>
				)}

				{selectedFile && (
					<div className="flex flex-col items-center w-full space-y-4">
						{isPDF(selectedFile) && (
							<div className="flex flex-col items-center justify-center gap-2 text-center py-12">
								<FaFilePdf size={24} />
								<div className="opacity-50">{selectedFile.name}</div>
							</div>
						)}
						{isImage(selectedFile) && (
							<figure className="flex flex-col items-center justify-center text-center rounded-md border border-gray-100 overflow-hidden">
								<div className="overflow-y-scroll max-h-80 w-full border-b border-gray-100">
									<img className="w-full" src={URL.createObjectURL(selectedFile)} alt="file" />
								</div>
								<figcaption className="w-full text-primary text-sm p-2 whitespace-pre">{selectedFile.name}</figcaption>
							</figure>
						)}
						<div className="flex justify-center gap-3">
							<Button variant="secondary" text="Preview" onClick={handlePreview} />
							<label className="inline-block bg-primary px-5 py-2 rounded-md text-white hover:bg-primary-400 cursor-pointer" htmlFor={name}>
								Ubah File
							</label>
						</div>
					</div>
				)}

				<input className="hidden" id={name} name="document" type="file" accept="image/*, .pdf" onChange={handleChangeFile} />
			</form>
		</Modal>
	);
};

ModalUpload.defaultProps = {
	name: 'file'
};
