import axios from 'axios'
export const baseApi = ({ method, url, data = {}, header = { 'content-type': 'application/json' } }) => {
  const response = data || method === 'get'
    ? axios({
      method,
      url,
      data,
      headers: {
        ...header
      }
    })
    : {}
  return response
}
