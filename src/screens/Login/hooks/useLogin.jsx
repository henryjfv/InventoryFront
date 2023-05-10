import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, register } from '../../../services/authApi.js'
import { useUserContext } from '../../../utils/context/hooks/useUserContext.jsx'
import { setLocalStorage } from '../../../utils/storage.js'
import { isNotEmpty, isValidEmail } from '../../../utils/validator.js'

export const useLogin = () => {
  const navigate = useNavigate()

  const { setContextData } = useUserContext()
  const [showLoginOrRegister, setShowLoginOrRegister] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)

  const [seePassword, setSeePassword] = useState(false)

  const activatePassword = () => {
    setSeePassword(!seePassword)
  }

  const flagScreens = () => {
    setShowLoginOrRegister((current) => !current)
  }

  const validateForm = () => {
    const validatePass = !isNotEmpty(password)
    setErrorPassword(validatePass)
    setErrorEmail(!isNotEmpty(email))
    return !errorEmail && !errorPassword
  }

  const changeEmail = ({ target }) => {
    const emailText = target.value
    setErrorEmail(!isValidEmail(emailText))
    setEmail(emailText)
  }

  const changePassword = ({ target }) => {
    const passwordText = target.value
    setErrorPassword(!isNotEmpty(passwordText))
    setPassword(passwordText)
  }

  const showPassword = (e) => {
    e.preventDefault()
    setSeePassword(!seePassword)
  }
  const handelSubmit = (e) => {
    e.preventDefault()
    submit({ type: true })
  }

  const submit = async ({ type }) => {
    if (!validateForm()) return
    setIsLoading(true)
    try {
      const dataSend = { email, password }
      const response = type ? await login({ dataSend }) : await register({ dataSend })
      const { data } = response
      setContextData({
        token: data?.data?.token,
        email: data?.data?.user?.email,
        role: data?.data?.user?.role
      })
      setLocalStorage('token', data?.data?.token)
      setLocalStorage('email', data?.data?.user?.email)
      setLocalStorage('role', data?.data?.user?.role)
      navigate('/', { replace: true })
      // window.location.reload()
      setError(false)
      setIsLoading(false)
    } catch (error) {
      setError(true)
      setIsLoading(false)
    }
  }

  return {
    showLoginOrRegister,
    flagScreens,
    isLoading,
    submit,
    error,
    showPassword,
    changePassword,
    changeEmail,
    email,
    password,
    seePassword,
    setSeePassword,
    activatePassword,
    handelSubmit
  }
}
