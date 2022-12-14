import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import airportReducer from './airport/airport.reducer';
import flightReducer from './flight/flight.reducer';
import transactionReducer from './transaction/transaction.reducer';
import notificationReducer from './notification/notification.reducer';

import adminAuthReducer from './admin/auth/admin.auth.reducer';
import adminAirportReducer from './admin/airport/admin.airport.reducer';
import adminProductReducer from './admin/product/admin.product.reducer';

export default combineReducers({
	auth: authReducer,
	airport: airportReducer,
	flight: flightReducer,
	transaction: transactionReducer,
	notification: notificationReducer,
	admin_auth: adminAuthReducer,
	admin_airport: adminAirportReducer,
	admin_product: adminProductReducer
});
