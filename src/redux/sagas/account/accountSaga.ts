
import { call, put, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { checkAPI, loginAPI } from "axios/account";
import { login, setProfile, setLoading, setLoginSuccess, checkToken, logout } from "@Redux/slices/account/accountSlice";
import { LoginType, UserResponse } from "interface/I_account";
import { takeEvery } from "redux-saga/effects";

interface Response<T> {
  data: {
    data: T,
    status: 'success' | 'fail'
  }
}

// handler
function* handleLogin(action: PayloadAction<LoginType>) {
  const { email, password, isRemember } = action.payload

  const loginData = {
    email,
    password
  }
  try {
    yield put(setLoading(true))
    const res: Response<UserResponse> = yield call(loginAPI, loginData)
    const { data, status } = res.data

    if (status === 'success') {
      yield put(setProfile(data))
      yield put(setLoginSuccess({
        email,
        password,
        isRemember,
        JWTToken: data.JWTToken
      }))
    }
  } catch (error) {
    console.log(error)
  } finally {
    yield put(setLoading(false))
  }
}

function* handleCheck() {
  try {
    yield put(setLoading(true))
    const res: Response<UserResponse> = yield call(checkAPI)
    const { data, status } = res.data

    if (status === 'success') {
      yield put(setProfile(data))
    }
  } catch (error) {
    console.log(error)
    yield put(logout())
  } finally {
    yield put(setLoading(false))
  }
}

// watcher
export function* watchLogin() {
  yield takeLatest(login.type, handleLogin)
}

export function* watchCheck() {
  yield takeEvery(checkToken.type, handleCheck)
}