import { addAxiosHeader, clearAxiosHeader } from '../../../axios/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LoginType } from 'interface/I_account'
import Cookies from 'js-cookie'


export interface accountState {
  value: {
    profile: {
      email: string
      userName: string
      image: string
    }
  }
  loading: boolean
  loginSuccess: boolean
}

const initialState: accountState = {
  value: {
    profile: {
      email: '',
      userName: '',
      image: ''
    }
  },
  loading: false,
  loginSuccess: false,
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (_state, _action: PayloadAction<LoginType>) => { },
    setProfile: (state, action: PayloadAction<any>) => {
      const value = action.payload
      return {
        ...state,
        value: {
          ...state.value,
          profile: {
            ...state.value.profile,
            id: value._id,
            email: value.email,
            userName: value.userName,
            image: value.image
          }
        },
        loginSuccess: true
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      const value = action.payload
      return {
        ...state,
        loading: value
      }
    },
    setLoginSuccess: (_state, action: PayloadAction<LoginType>) => {
      const { email, password, isRemember, JWTToken } = action.payload
      if (isRemember) {
        Cookies.set('isRemember', isRemember)
        Cookies.set('account', email)
        Cookies.set('password', password)
      } else {
        Cookies.remove('account')
        Cookies.remove('password')
        Cookies.remove('isRemember')
      }
      Cookies.set('accessToken', JWTToken)
      addAxiosHeader(JWTToken)
    },
    checkToken: () => { },
    logout: (state) => {
      Cookies.remove('accessToken')
      clearAxiosHeader()
      return {
        ...state,
        value: {
          ...state.value,
          profile: {
            ...state.value.profile,
            id: '',
            email: '',
            userName: '',
            image: ''
          }
        },
        loginSuccess: false
      }
    }
  },
})

export const { login, setProfile, setLoading, setLoginSuccess, checkToken, logout } = accountSlice.actions

export default accountSlice.reducer
