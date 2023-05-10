export const BASE_API = import.meta.env.VITE_BASE_API
export const VERSION_API = '/api/v1'
export const ROUTE = `${BASE_API + VERSION_API}`
export const AUTH = {
  login: `${ROUTE}/auth/login`,
  register: `${ROUTE}/auth/register`
}
export const COMPANY = {
  company: `${ROUTE}/company`
}
export const INVENTORY = {
  inventory: `${ROUTE}/inventory`,
  email: `${ROUTE}/inventory/send`,
  download: `${ROUTE}/inventory/download`,
}
