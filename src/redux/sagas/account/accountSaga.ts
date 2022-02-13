import { call, put, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { loginAPI } from "axios/account";
import { login, setProfile, setLoading } from "@Redux/slices/account/accountSlice";
import { LoginType } from "interface/I_account";

// handler
function* handleLogin(action: PayloadAction<LoginType>) {
  const value = action.payload
  try {
    yield put(setLoading(true))
    const res = yield call(loginAPI, value)
    const { data, status } = res.data

    if (status === 'success') {
      yield put(setProfile(data))
    }
  } catch (error) {
    console.log(error)
  } finally {
    yield put(setLoading(false))
  }
}

// watcher
export function* watchLogin() {
  yield takeLatest(login.type, handleLogin)
}