import { baseApi } from './api.js'
import { INVENTORY } from '../utils/constants.js'
import { getLocalStorage } from '../utils/storage.js'

export const getInventory = ({ id }) => {
  try {
    const token = getLocalStorage('token')
    return baseApi({ method: 'get', url: `${INVENTORY.inventory}/${id}`, header: { Authorization: `Bearer ${token}` } })
  } catch (error) {
    console.log('🚀 ~ file: company.js:10 ~ getInventory ~ error:', error)
    return error
  }
}

export const postInventory = ({ data }) => {
  try {
    const token = getLocalStorage('token')
    return baseApi({ method: 'post', url: INVENTORY.inventory, header: { Authorization: `Bearer ${token}` }, data })
  } catch (error) {
    return error
  }
}

export const senEmail = ({ data }) => {
  try {
    const token = getLocalStorage('token')
    return baseApi({ method: 'post', url: INVENTORY.email, header: { Authorization: `Bearer ${token}` }, data })
  } catch (error) {
    return error
  }
}
