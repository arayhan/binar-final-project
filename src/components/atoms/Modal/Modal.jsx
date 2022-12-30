import { Button } from '../Button/Button';

export const Modal = ({
	title,
	description,
	children,
	hideCancelButton,
	cancelButtonText,
	hideSubmitButton,
	submitButtonText,
	onClose,
	onSubmit
}) => {
	return (
		<div className="fixed top-0 left-0 w-full h-screen z-10 py-4 flex items-center justify-center">
			<div className="absolute left-0 top-0 w-full h-full bg-black opacity-50" onClick={onClose} />
			<div className="relative w-full max-w-screen-md bg-white rounded-md">
				<div className="px-6 py-4">
					<div className="font-bold text-lg">{title}</div>
					{description && <div className="text-sm text-gray-400">{description}</div>}
				</div>
				<hr />
				<div className="p-6">{children}</div>
				<hr />
				<div className="px-6 py-4 flex items-center justify-between gap-4">
					{!hideCancelButton && <Button variant="danger" text={cancelButtonText || 'Cancel'} onClick={onClose} />}
					{!hideSubmitButton && <Button variant="primary" text={submitButtonText || 'Submit'} onClick={onSubmit} />}
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
