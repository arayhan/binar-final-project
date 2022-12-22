import { combineReducers } from 'redux';
import authReducer from './auth/auth.reducer';
import airportReducer from './airport/airport.reducer';

export default combineReducers({
	auth: authReducer,
	airport: airportReducer
});
