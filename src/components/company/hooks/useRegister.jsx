import { useState } from 'react'
import { isNotEmpty } from '../../../utils/validator'
import { postCompany } from '../../../services/company.js'

export const useRegister = () => {
  const [idCompany, setIdCompany] = useState('')
  const [legalNumber, setLegalNumber] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')

  const [load, setLoad] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isNotEmpty(legalNumber) && isNotEmpty(name)) {
      postCompany()
    }
  }

  const submitData = async () => {
    const response = await postCompany({ data: { legalNumber, name, address, phone } })
    setLoad(true)
    clearData()
  }

  const deleteData = async () => {
    const response = await deleteCompany({ data: { idCompany } })
    setLoad(true)
    clearData()
  }

  const clearData = () => {
    setLegalNumber('')
    setName('')
    setAddress('')
    setPhone('')
  }

  return {
    handleSubmit,
    legalNumber,
    setLegalNumber,
    name,
    setName,
    address,
    setAddress,
    phone,
    setPhone,
    submitData,
    load,
    setIdCompany,
    deleteData
  }
}
