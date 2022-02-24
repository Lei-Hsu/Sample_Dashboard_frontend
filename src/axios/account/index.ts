import { SignInType } from 'interface/I_account';

import { customAxios } from '../index';

export const loginAPI = (data) => (
  customAxios.post('user/login', data)
)

export const signInAPI = (data: SignInType) => (
  customAxios.post('user/signin', data)
)

export const checkAPI = () => (
  customAxios.post('user/check')
)