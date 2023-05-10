import { useState } from 'react'
import { isNotEmpty } from '../../../utils/validator'
import { postInventory } from '../../../services/inventory'

export const useRegister = () => {
  const [product, setProduct] = useState('')
  const [total, setTotal] = useState('')
  const [load, setLoad] = useState(false)

  const submitData = (companyId) => {
    if (validate) {
      const response = postInventory({ data: { product, total, companyId } })
      setLoad(true)
      clearData()
    }
  }

  const validate = () => {
    return isNotEmpty(product) && isNotEmpty(total)
  }

  const clearData = () => {
    setProduct('')
    setTotal('')
  }

  return {
    product,
    setProduct,
    total,
    setTotal,
    submitData,
    load
  }
}
