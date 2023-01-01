import { isImage, isPDF } from '@/utils/helpers';
import React, { forwardRef, useRef, useState } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { FaFilePdf } from 'react-icons/fa';
import { Button } from '../Button/Button';
import { InputError } from '../InputError/InputError';
import { InputLabel } from '../InputLabel/InputLabel';

export const InputUpload = forwardRef(({ value, name, error, label, disabled, containerClassName, onChange }, ref) => {
	const formUploadRef = useRef();
	const inputUploadRef = useRef();

	const [selectedFile, setSelectedFile] = useState(value?.file);
	const [_error, _setError] = useState(null);

	const handlePreview = () => {
		if (selectedFile) {
			const url = URL.createObjectURL(selectedFile);
			window.open(url, '_blank');
		}
	};

	const handleChangeFile = (event) => {
		const formEl = formUploadRef.current;
		const formData = new FormData(formEl);
		const file = event.target.files[0];

		if (file && !isImage(file) && !isPDF(file)) {
			const message = 'File harus berupa gambar atau pdf';

			notify.show(message, 'warning');
			_setError(message);
			return;
		}

		_setError(null);
		setSelectedFile(file);
		onChange({ file, formData });

		event.preventDefault();
	};

	return (
		<form ref={ref} className={`space-y-2 ${containerClassName}`}>
			<InputLabel text={label} />
			{!selectedFile && (
				<label
					htmlFor={name}
					className={`inline-block border ${error || _error ? 'border-red-500' : ''} border-dashed rounded-md w-full text-center ${
						disabled ? 'opacity-50' : 'hover:cursor-pointer hover:bg-gray-100'
					}`}
				>
					<div className="flex flex-col items-center justify-center space-y-4 p-8 h-48 md:h-40">
						<BiPlusCircle size={24} />
						<div className="flex items-center space-x-2">
							<span>{label || 'Upload File'}</span>
						</div>
					</div>
				</label>
			)}

			{selectedFile && (
				<div className="space-y-3">
					<div className="flex flex-col items-center justify-center space-y-6 w-full border border-gray-100 rounded-md p-8 h-48 md:h-40">
						{isPDF(selectedFile) && (
							<div className="flex flex-col items-center justify-center gap-2 text-center">
								<FaFilePdf size={24} />
								<div className="opacity-50">{selectedFile.name}</div>
							</div>
						)}
						{isImage(selectedFile) && <img className="h-full object-cover" src={URL.createObjectURL(selectedFile)} alt={label} />}
					</div>
					<div className="flex justify-center gap-3">
						<Button disabled={disabled} variant="secondary" text="Preview" onClick={handlePreview} />
						<Button disabled={disabled} variant="primary" text="Ubah File" onClick={() => inputUploadRef.current.click()} />
					</div>
				</div>
			)}

			{(_error || error?.message) && <InputError message={_error || error?.message} />}
			<input ref={inputUploadRef} className="hidden" id={name} name="document" type="file" accept="image/*, .pdf" onChange={handleChangeFile} />
		</form>
	);
});

InputUpload.displayName = 'InputUpload';
InputUpload.defaultProps = {
	onUploaded: () => {}
};
