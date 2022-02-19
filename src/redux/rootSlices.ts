import accountReducer from '@Redux/slices/account/accountSlice';
import commonReducer from '@Redux/slices/common/commonSlice';
import counterReducer from '@Redux/slices/counterSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  counter: counterReducer,
  account: accountReducer,
  common: commonReducer,
});