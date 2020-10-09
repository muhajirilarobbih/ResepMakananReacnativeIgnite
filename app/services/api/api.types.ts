import { GeneralApiProblem } from "./api-problem"

export interface User {
  id: number
  name: string
}

export interface Reseps {
  name: string
  image: string
  desc: string
}

export class AppError {
  public message: string
  constructor(message: string) {
    this.message = message
  }
}

export type LoginResponse = {
  token: string
  tokenScheme: string
}

export type LoginRequest = {
  username: string
  password: string
}

export interface BaseResponse<T> {
  isSuccess: boolean
  statusCode: number
  message?: string
  errorCode?: string
  path?: string
  payload?: T
}

export interface AppVersionResponse {
  androidCurrentVersion: string
  androidLastVersion: string
  iosCurrentVersion: string
  iosLastVersion: string
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem
export type GetResepsResult = { kind: "ok"; reseps: Reseps[] } | GeneralApiProblem
