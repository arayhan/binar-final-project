import { ACTION_NOTIFICATION } from '@/store/actions';
import React, { Fragment } from 'react';
import { IoMdNotifications } from 'react-icons/io';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';

export const Notification = () => {
	const dispatch = useDispatch();

	const { notificationList, fetchingNotificationList } = useSelector((state) => state.notification);

	const { actionGetNotificationList, actionPutReadNotification } = ACTION_NOTIFICATION;

	const fetchNotification = () => {
		dispatch(actionGetNotificationList({ page: 1, limit: 5 }));
	};

	const handleReadNotification = (notificationID) => {
		dispatch(
			actionPutReadNotification(notificationID, ({ success }) => {
				if (success) fetchNotification();
			})
		);
	};

	return (
		<div className="flex flex-col divide-y text-xs md:text-sm">
			{fetchingNotificationList && !notificationList && (
				<Fragment>
					<div className="p-5 gap-3">
						<Skeleton inline />
						<Skeleton className="w-1/2" />
						<Skeleton />
					</div>
					<div className="p-5 gap-3">
						<Skeleton inline />
						<Skeleton className="w-1/2" />
						<Skeleton />
					</div>
				</Fragment>
			)}
			{!fetchingNotificationList && notificationList?.length === 0 && (
				<div className="w-full bg-white px-8 py-12 rounded-md flex flex-col items-center justify-center space-y-5">
					<img className="w-1/3" src={require('@/images/icons/popup_error.svg').default} alt="" />
					<div className="font-semibold">There is no notification yet</div>
				</div>
			)}
			{!fetchingNotificationList && notificationList?.length > 0 && (
				<Fragment>
					{notificationList.map((notification) => (
						<button
							key={notification.id}
							className="relative text-left flex items-start gap-3 p-5 hover:bg-gray-100"
							onClick={() => handleReadNotification(notification.id)}
						>
							{!notification.is_read && (
								<span className="absolute right-3 top-3 flex h-2 w-2">
									<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
								</span>
							)}
							<div className="bg-primary text-white rounded-full p-2">
								<IoMdNotifications size={18} />
							</div>
							<div className="space-y-1">
								{notification.title && <div className="text-base font-semibold">{notification.title}</div>}
								<div>{notification.body}</div>
							</div>
						</button>
					))}
				</Fragment>
			)}
		</div>
	);
};
