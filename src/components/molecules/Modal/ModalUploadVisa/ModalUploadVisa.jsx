import { Modal } from '@/components/atoms';
import { ACTION_TRANSACTION } from '@/store/actions';
import { useRef, useState } from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { notify } from 'react-notify-toast';
import { useDispatch, useSelector } from 'react-redux';

export const ModalUploadVisa = ({ onClose, onUploaded }) => {
	const dispatch = useDispatch();

	const uploadVisaRef = useRef();

	const { actionUploadDocument } = ACTION_TRANSACTION;

	const { processingUploadDocument } = useSelector((state) => state.transaction);

	const [selectedFile, setSelectedFile] = useState(null);
	const [selectedFileFormData, setSelectedFileFormData] = useState(null);
	const [error, setError] = useState(null);

	const handleUploadFile = () => {
		if (selectedFileFormData) {
			dispatch(
				actionUploadDocument(selectedFileFormData, ({ success, message, response }) => {
					notify.show(message, success ? 'success' : 'error');
					if (success) onUploaded(response.url);
				})
			);
		}
	};

	const handleChangeFile = (event) => {
		const formEl = uploadVisaRef.current;
		const formData = new FormData(formEl);
		const file = event.target.files[0];

		if (file && file.type.indexOf('image') === -1) {
			const message = 'File harus berupa gambar';

			notify.show(message, 'warning');
			setError(message);
			return;
		}

		setError(null);
		setSelectedFile(file);
		setSelectedFileFormData(formData);
		handleUploadFile(formData);

		event.preventDefault();
	};

	return (
		<Modal
			title="Upload Visa"
			description="Pastikan file yang Anda input valid"
			isLoading={processingUploadDocument}
			onClose={onClose}
			onSubmit={handleUploadFile}
		>
			{error && (
				<div className="text-red-500 text-sm mb-3 flex items-center space-x-3 justify-start bg-red-50 p-2 rounded-md">
					<div className="w-4">
						<RiErrorWarningFill size={18} />
					</div>
					<span>{error}</span>
				</div>
			)}
			<form ref={uploadVisaRef} className="space-y-4">
				{!selectedFile && (
					<label
						className="inline-block border border-dashed rounded-md w-full text-center hover:bg-gray-100 hover:cursor-pointer"
						htmlFor="visa"
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
						<figure className="flex flex-col items-center justify-center text-center rounded-md border border-gray-100 overflow-hidden">
							<div className="overflow-y-scroll max-h-80 w-full border-b border-gray-100">
								<img className="w-full" src={URL.createObjectURL(selectedFile)} alt="visa" />
							</div>
							<figcaption className="w-full text-primary text-sm p-2">{selectedFile.name}</figcaption>
						</figure>

						<label className="inline-block bg-primary px-5 py-2 rounded-md text-white hover:bg-primary-400 cursor-pointer" htmlFor="visa">
							Ubah File
						</label>
					</div>
				)}

				<input className="hidden" id="visa" name="document" type="file" accept="image/*" onChange={handleChangeFile} />
			</form>
		</Modal>
	);
};
