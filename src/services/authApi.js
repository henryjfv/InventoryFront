import { baseApi } from './api.js'
import { AUTH } from '../utils/constants.js'

export const login = ({ dataSend }) => {
  try {
    return baseApi({ method: 'post', url: AUTH.login, data: dataSend })
  } catch (error) {
    return error
  }
}

export const register = ({ dataSend }) => {
  try {
    return baseApi({ method: 'post', url: AUTH.register, data: dataSend })
  } catch (error) {
    return error
  }
}
