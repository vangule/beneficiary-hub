import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './userSlice';

const rootReducer = combineReducers({
	user: userReducer,
});

const preserveConfig = {
	key: 'root',
	storage,
};

const preserveReducer = persistReducer(preserveConfig, rootReducer);

export default preserveReducer;
