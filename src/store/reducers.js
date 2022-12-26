import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import airportReducer from './airport/airport.reducer';
import flightReducer from './flight/flight.reducer';

export default combineReducers({
	auth: authReducer,
	airport: airportReducer,
	flight: flightReducer
});
