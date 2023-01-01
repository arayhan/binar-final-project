import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export const Button = ({ className, disabled, linkTo, onClick, variant, children, text }) => {
	const navigate = useNavigate();

	const variantClasses = classNames({
		'bg-primary-500 hover:bg-primary-400 disabled:bg-primary-300 text-white': variant === 'primary',
		'bg-secondary-500 hover:bg-secondary-400 disabled:bg-secondary-300': variant === 'secondary',
		'bg-blue-500 hover:bg-blue-400 disabled:bg-blue-300 text-white': variant === 'info',
		'bg-green-500 hover:bg-green-400 disabled:bg-green-300 text-white': variant === 'success',
		'bg-yellow-500 hover:bg-yellow-400 disabled:bg-yellow-300 text-white': variant === 'warning',
		'bg-red-500 hover:bg-red-400 disabled:bg-red-300 text-white': variant === 'danger',
		'bg-gray-200 hover:bg-gray-100 disabled:bg-gray-300 text-gray-400': variant === 'cancelled'
	});

	const handleClick = (event) => {
		event.stopPropagation();
		return linkTo ? navigate(linkTo) : onClick();
	};

	return (
		<button
			type="button"
			className={`inline-block text-center transition-all ${className || 'px-6 py-2 rounded-md'} ${variantClasses}`}
			onClick={handleClick}
			disabled={disabled}
		>
			{children || text}
		</button>
	);
};

Button.defaultProps = {
	onClick: () => {}
};
