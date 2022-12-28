import { requestSaveBookingTempData } from './booking.types';

export const actionSaveBookingTempData = (data) => async (dispatch) => dispatch(requestSaveBookingTempData(data));
