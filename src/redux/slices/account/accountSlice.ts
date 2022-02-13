import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginType } from 'interface/I_account'


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
    }
  },
})

export const { login, setProfile, setLoading } = accountSlice.actions

export default accountSlice.reducer
