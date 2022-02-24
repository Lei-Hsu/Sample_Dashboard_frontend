
import { checkAPI, loginAPI, signInAPI } from 'axios/account';
import { calcAxisDelta } from 'framer-motion/types/projection/geometry/delta-calc';
import { LoginType, SignInType, UserResponse } from 'interface/I_account';
import { takeEvery } from 'redux-saga/effects';

import { call, put, takeLatest } from '@redux-saga/core/effects';
import {
  checkToken,
  login,
  logout,
  setLoading,
  setLoginSuccess,
  setProfile,
  setSignIn
} from '@Redux/slices/account/accountSlice';
import { PayloadAction } from '@reduxjs/toolkit';

interface Response<T> {
  data: {
    data: T,
    status: 'success' | 'fail',
    message?: string
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

function* handleSignIn(action: PayloadAction<SignInType>) {
  const data = action.payload
  try {
    const res = yield call(signInAPI, data)
    const { status } = res.data
    if (status === 'success') {
      // 跳轉回去
    }
  } catch (error) {
    console.log(error)
  }
}

// watcher
export function* watchLogin() {
  yield takeLatest(login.type, handleLogin)
}

export function* watchCheck() {
  yield takeEvery(checkToken.type, handleCheck)
}

export function* watchSignIn() {
  yield takeLatest(setSignIn.type, handleSignIn)
}