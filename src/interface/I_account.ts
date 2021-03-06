export interface LoginType {
  email: string,
  password: string
  isRemember: boolean
  JWTToken?: string
}

export interface UserResponse {
  userName: string,
  JWTToken: string,
  email: string,
}

export interface SignInType {
  email: string,
  password: string
}