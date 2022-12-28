// ==================================
// TYPES
// ==================================
export const REQUEST_SAVE_BOOKING_TEMP_DATA = 'REQUEST_SAVE_BOOKING_TEMP_DATA';

// ==================================
// DISPATCHERS
// ==================================
export const requestSaveBookingTempData = (data) => ({
	type: REQUEST_SAVE_BOOKING_TEMP_DATA,
	payload: { data }
});
