import { customAxios } from '../index'

export const loginAPI = (data) => (
  customAxios.post('user/login', data)
)

export const signInAPI = (data) => (
  customAxios.post('user/signin', data)
)