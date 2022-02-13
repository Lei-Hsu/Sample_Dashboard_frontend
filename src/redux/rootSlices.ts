import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "@Redux/slices/counterSlice";
import accountReducer from '@Redux/slices/account/accountSlice'

export const rootReducer = combineReducers({
  counter: counterReducer,
  account: accountReducer
});