import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import preserveReducer from './preserveReducer';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
	reducer: preserveReducer,
});

export const persistor = persistStore(store);
