import PropTypes from 'prop-types';

const Backdrop = ({ className, active, onClick }) => {
	const backdropClass = active ? `visible opacity-50` : 'invisible opacity-0';

	return (
		<div
			className={`${className} ${backdropClass} fixed left-0 top-0 w-full h-screen bg-black transition-all`}
			onClick={() => onClick()}
			aria-hidden="true"
		/>
	);
};

Backdrop.propTypes = {
	active: PropTypes.bool,
	onClick: PropTypes.func
};

Backdrop.defaultProps = {
	active: false,
	onClick: () => {}
};

export default Backdrop;
