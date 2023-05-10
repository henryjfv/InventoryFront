import { useState } from 'react'
import { isNotEmpty, isValidEmail } from '../../../utils/validator'
import { senEmail, download } from '../../../services/inventory'

export const useSendEmail = ({ companyName, id }) => {
  const [email, setEmail] = useState('')
  const [loadEmail, setLoad] = useState(0)

  const submitSendEmail = (email, companyName, companyId) => {
    if (isNotEmpty(email) && isValidEmail(email)) {
      senEmail({ data: { email, companyName, companyId } })
      setLoad(loadEmail + 1)
    }
  }

  const downloadPdf = () => {
    download({ id, companyName })
  }

  return {
    email,
    setEmail,
    submitSendEmail,
    loadEmail,
    downloadPdf
  }
}
