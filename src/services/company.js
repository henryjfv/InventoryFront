import { baseApi } from './api.js'
import { COMPANY } from '../utils/constants.js'
import { getLocalStorage } from '../utils/storage.js'

export const getCompany = () => {
  try {
    const token = getLocalStorage('token')
    return baseApi({ method: 'get', url: COMPANY.company, header: { Authorization: `Bearer ${token}` } })
  } catch (error) {
    console.log('🚀 ~ file: company.js:10 ~ getCompany ~ error:', error)
    return error
  }
}

export const postCompany = ({ data }) => {
  try {
    const token = getLocalStorage('token')
    return baseApi({ method: 'post', url: COMPANY.company, header: { Authorization: `Bearer ${token}` }, data })
  } catch (error) {
    return error
  }
}
export const deleteCompany = ({ data }) => {
  try {
    const token = getLocalStorage('token')
    return baseApi({ method: 'delete', url: COMPANY.company, header: { Authorization: `Bearer ${token}` }, data })
  } catch (error) {
    return error
  }
}
