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

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem
export type GetResepsResult = { kind: "ok"; reseps: Reseps[] } | GeneralApiProblem
