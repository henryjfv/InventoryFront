import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ existToken, children }) => {
  if (!existToken) {
    return <Navigate to='/login' />
  }
  return children
}

export const ProtectedLogin = ({ existToken, children }) => {
  if (existToken) {
    return <Navigate to='/' />
  }
  return children
}

export const manageErrorAuth = (status) => {
  console.log(status)
  if (status === 401) {
    // eslint-disable-next-line no-undef
    console.log('Session expired, please login again')
  }
}
