import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebookSlice';
import { authReducer } from './auth/authSlice';

const reducer = {
  phonebook: phonebookReducer,
  auth: authReducer,
};

export const store = configureStore({
  reducer,
});
