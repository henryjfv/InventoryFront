import { baseApi } from './api.js'
import { INVENTORY } from '../utils/constants.js'
import { getLocalStorage } from '../utils/storage.js'
import axios from 'axios'

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

export const deleteProduct = ({ idInventory }) => {
  try {
    const token = getLocalStorage('token')
    return baseApi({ method: 'delete', url: `${INVENTORY.inventory}/${idInventory}`, header: { Authorization: `Bearer ${token}` } })
  } catch (error) {
    return error
  }
}

export const download = ({ id, companyName }) => {
  try {
    const token = getLocalStorage('token')

    axios({
      url: `${INVENTORY.download}/${id}/${companyName}`,
      method: 'GET',
      responseType: 'blob',
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      console.log("🚀 ~ file: inventory.js:53 ~ download ~ response:", response)
      // create file link in browser's memory
      const href = URL.createObjectURL(response.data);

      // create "a" HTML element with href to file & click
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', 'report.pdf'); //or any other extension
      document.body.appendChild(link);
      link.click();

      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);

      return ''

    });
  } catch (error) {
    return error
  }
}
