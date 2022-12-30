import { BiLoaderAlt } from 'react-icons/bi';
import { Button } from '../Button/Button';

export const Modal = ({
	title,
	description,
	children,
	hideCancelButton,
	cancelButtonText,
	hideSubmitButton,
	submitButtonText,
	isLoading,
	onClose,
	onSubmit
}) => {
	const handleClose = () => {
		if (!isLoading) onClose();
	};

	return (
		<div className="fixed top-0 left-0 w-full h-screen z-10 p-4 flex items-center justify-center">
			<div className="absolute left-0 top-0 w-full h-full bg-black opacity-50" onClick={handleClose} />
			<div className="relative w-full max-w-screen-md bg-white rounded-md">
				<div className="px-6 py-4">
					<div className="font-bold text-lg">{title}</div>
					{description && <div className="text-sm text-gray-400">{description}</div>}
				</div>
				<hr />
				<div className="p-6">
					{isLoading && (
						<div className="flex items-center justify-center">
							<BiLoaderAlt className="animate-spin" />
						</div>
					)}
					{!isLoading && children}
				</div>
				<hr />
				<div className="px-6 py-4 flex items-center justify-between gap-4">
					{!hideCancelButton && <Button variant="danger" disabled={isLoading} text={cancelButtonText || 'Cancel'} onClick={handleClose} />}
					{!hideSubmitButton && <Button variant="primary" disabled={isLoading} text={submitButtonText || 'Submit'} onClick={onSubmit} />}
				</div>
			</div>
		</div>
	);
};

Modal.defaultProps = {
	hideCancelButton: false,
	hideSubmitButton: false,
	onClose: () => {},
	onSubmit: () => {}
};
