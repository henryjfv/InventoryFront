import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../../../utils/context/hooks/useUserContext.jsx'
import { getLocalStorage, removeLocalStorageItem } from '../../../utils/storage.js'

export const useNavbar = () => {
  const { contextData, setContextData } = useUserContext()

  const [emailUser, setEmailUser] = useState('')
  const [roleUser, setRoleUser] = useState('')
  const navigate = useNavigate()

  const logout = () => {
    navigate('/login', { replace: true })
    // eslint-disable-next-line no-undef
    removeLocalStorageItem('token')
    removeLocalStorageItem('email')
    removeLocalStorageItem('role')
    setEmailUser(null)
    setRoleUser(null)
    setContextData({ email: null, role: null, token: null })
  }

  const getEmail = () => {
    const email = getLocalStorage('email')
    setEmailUser(email ?? '')
  }

  const getRole = () => {
    const role = getLocalStorage('role')
    setRoleUser(role?.replace(/^\w/, (c) => c.toUpperCase()) ?? '')
  }

  useEffect(() => {
    getEmail()
    getRole()
  }, [getLocalStorage('email')])

  return {
    logout,
    emailUser,
    roleUser
  }
}
