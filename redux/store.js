import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import preserveReducer from './preserveReducer';

export const store = configureStore({
	reducer: preserveReducer,
});

export const persistor = persistStore(store);
