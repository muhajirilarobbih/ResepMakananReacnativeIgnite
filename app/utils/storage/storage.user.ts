import { LoginResponse } from "../../services/api"
import { containsStorage, load, remove } from "./storage"

/**
 * Fungsi untuk mengecek apakah user telah diautentikasi atau belum
 */
export const isUserAuthenticated = async () => {
    return await containsStorage('user')
}

export const getUser = async () => {
    const user: LoginResponse = await load('user')
    return user
}

export const removeUser = async () => {
    await remove('user')
    await remove('usertoken')
    await remove('formNumber')
    await remove('participantUserProfile')
    await remove('avatarUrl')
}