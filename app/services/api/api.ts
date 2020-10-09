import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"
import { ResepSnapshot } from "../../models/resep/resep"
import { getUser } from "../../utils/storage/storage.user"
import { logger } from "../../app-config"

/**
 * Manages all requests to the API.
 */

const convertResep = (raw: any): ResepSnapshot => {
  return {
    name: raw.name,
    image: raw.image,
    desc: raw.desc
  }
}

export type WrapRequestDelegate<T> = (apiInstance: ApisauceInstance) => Promise<T>


export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  async wrapRequest<T>(value: WrapRequestDelegate<T>): Promise<T> {
    const user = await getUser()
    if (user !== null) {
      this.apisauce.setHeader('Authorization', `${user.tokenScheme} ${user.token}`)
    }

    const r = await value(this.apisauce)
    logger.debug(`wrapRequest: ${JSON.stringify(r, undefined, 4)}`)
    const rAny: any = r
    if (rAny.ok !== true) {
      throw 'Something happened'
    }

    if (!rAny.data.isSuccess) {
      throw rAny.data.message
    }
    return r
  }

  /**
   * Gets a list of users.
   */
  async getUsers(): Promise<Types.GetUsersResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(`/users`)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    const convertUser = (raw) => {
      return {
        id: raw.id,
        name: raw.name,
      }
    }

    // transform the data into the format we are expecting
    try {
      const rawUsers = response.data
      const resultUsers: Types.User[] = rawUsers.map(convertUser)
      return { kind: "ok", users: resultUsers }
    } catch {
      return { kind: "bad-data" }
    }
  }

  /**
   * Gets a single user by ID
   */

  async getUser(id: string): Promise<Types.GetUserResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(`/users/${id}`)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const resultUser: Types.User = {
        id: response.data.id,
        name: response.data.name,
      }
      return { kind: "ok", user: resultUser }
    } catch {
      return { kind: "bad-data" }
    }
  }

  async getReseps(): Promise<Types.GetResepsResult> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(`/foods`)

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    // transform the data into the format we are expecting
    try {
      const rawUsers = response.data
      const resultUsers: ResepSnapshot[] = rawUsers.map(convertResep)
      return { kind: "ok", reseps: resultUsers }
    } catch {
      return { kind: "bad-data" }
    }
  }

  async login(request: Types.LoginRequest): Promise<Types.BaseResponse<Types.LoginResponse>> {
    const r = await this.wrapRequest((api) => {
      return api.post<Types.BaseResponse<Types.LoginResponse>>(`/api/auth/login`, request)
    })
    return r.data
  }

  async getAppVersion(login: Types.LoginResponse): Promise<Types.BaseResponse<Types.AppVersionResponse>> {
    const response = await this.apisauce.get<Types.BaseResponse<Types.AppVersionResponse>>('/api/general/appversion', {}, {
      headers: {
        Authorization: `${login.tokenScheme} ${login.token}`
      },
    })
    return response.data
  }
}

export const ApiInstance = new Api()
