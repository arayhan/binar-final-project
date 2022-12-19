import React from 'react';
import { IoMdAlert } from 'react-icons/io';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Alert = ({ className, type, message }) => {
	const typeClasses = classNames({
		'bg-primary-500': type === 'primary',
		'bg-blue-500': type === 'info',
		'bg-green-500': type === 'success',
		'bg-yellow-500': type === 'warning',
		'bg-red-500': type === 'danger' || type === 'error'
	});

	return (
		<div className={`w-full text-white rounded-md ${className} ${typeClasses}`}>
			<div className="p-3 flex items-center justify-between">
				<div className="text-sm flex items-center space-x-2">
					{type === 'primary' && <IoMdAlert size={20} />}
					<IoMdAlert size={18} />
					<span>Error</span>
				</div>
			</div>
			<hr className="border-red-400" />
			<div className="p-3">
				<span className="opacity-90">{message}</span>
			</div>
		</div>
	);
};

Alert.propTypes = {
	type: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'error'])
};

Alert.defaultProps = {
	className: '',
	onClose: () => {}
};
