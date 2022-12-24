import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const bindMiddleware = (middlewares) => {
	return process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(middlewares)) : applyMiddleware(middlewares);
};

const persistConfig = {
	key: 'root',
	whitelist: ['auth'],
	storage
};

const middlewares = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, bindMiddleware(...middlewares));
export const persistor = persistStore(store);
