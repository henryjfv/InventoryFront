import { useState } from 'react'
import { isNotEmpty, isValidEmail } from '../../../utils/validator'
import { senEmail } from '../../../services/inventory'

export const useSendEmail = () => {
  const [email, setEmail] = useState('')
  const [loadEmail, setLoad] = useState(0)

  const submitSendEmail = (email, companyName, companyId) => {
    if (isNotEmpty(email) && isValidEmail(email)) {
      senEmail({ data: { email, companyName, companyId } })
      setLoad(loadEmail + 1)
    }
  }

  return {
    email,
    setEmail,
    submitSendEmail,
    loadEmail
  }
}
