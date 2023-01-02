import { ACTION_TYPES, VARIANT_TYPES } from '@/utils/constants';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Button } from './Button';

export const ButtonAction = ({ text, className, linkTo, action, targetID, onClick }) => {
	const navigate = useNavigate();
	const location = useLocation();

	const variant =
		action === ACTION_TYPES.SEE_DETAIL
			? VARIANT_TYPES.INFO
			: action === ACTION_TYPES.UPDATE
			? VARIANT_TYPES.WARNING
			: action === ACTION_TYPES.DELETE
			? VARIANT_TYPES.DANGER
			: '';

	const handleAction = () => {
		if (action === ACTION_TYPES.SEE_DETAIL || action === ACTION_TYPES.UPDATE) {
			if (linkTo) navigate(linkTo);
			else if (!linkTo && action === ACTION_TYPES.SEE_DETAIL) navigate(`${location.pathname}/${targetID}`);
			else if (!linkTo && action === ACTION_TYPES.UPDATE) navigate(`${location.pathname}/update/${targetID}`);
		} else if (action === ACTION_TYPES.DELETE) {
			Swal.fire({
				title: 'Apakah Anda yakin menghapus item ini?',
				icon: 'warning',
				showCancelButton: true
			}).then((result) => {
				if (result.isConfirmed) {
					onClick();
				}
			});
		}
	};

	return (
		<Button className={`px-3 py-2 rounded-md text-xs ${className}`} onClick={handleAction} variant={variant}>
			{text && text}
			{!text && action === ACTION_TYPES.SEE_DETAIL && 'See Detail'}
			{!text && action === ACTION_TYPES.UPDATE && 'Update'}
			{!text && action === ACTION_TYPES.DELETE && 'Delete'}
		</Button>
	);
};
