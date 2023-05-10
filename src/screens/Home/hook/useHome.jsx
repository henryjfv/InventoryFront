import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCompany } from '../../../services/company'
import { manageErrorAuth } from '../../../utils/auth'
import { getLocalStorage } from '../../../utils/storage'

export const useHome = ({ setShowModalDeleteCompany, setIdCompany, setCompanyObject, setShowModal }) => {
  const [filterText, setFilterText] = useState('')
  const [loading, setLoading] = useState(true)

  const [doAgainRequest, setDoAgainRequest] = useState()

  const [companiesData, setCompaniesData] = useState([])

  const navigate = useNavigate()

  const role = getLocalStorage('role' ?? '')

  const columns = [
    {
      name: 'NIT',
      selector: row => row.legalNumber,
      sortable: true
    },
    {
      name: 'COMPANY',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'ADDRESS',
      selector: row => row.address
    },
    {
      name: 'PHONE',
      selector: row => row.phone
    },
    {
      name: '',
      sortable: false,
      cell: (row, index, column, id) => {
        const { _id, name } = row
        return (
          <> {(role && role === 'admin') &&
            <button onClick={() => {
              console.log(_id)
              navigate(`/inventory/${_id}/${name}`, { replace: true })
            }}
            >Inventory
            </button>
          }
          </>
        )
      }
    },
    {
      name: '',
      sortable: false,
      cell: (row, index, column, id) => {
        const { _id } = row
        return (
          <> {(role && role === 'admin') &&
            <button className='danger' onClick={() => {
              setIdCompany(_id)
              setShowModalDeleteCompany(true)
            }}
            >Delete
            </button>
          }
          </>
        )
      }
    },
    {
      name: '',
      sortable: false,
      cell: (row, index, column, id) => {
        const { _id, name, address, phone, legalNumber } = row
        return (
          <> {(role && role === 'admin') &&
            <button className='warning' onClick={() => {
              setIdCompany(_id)
              setCompanyObject({ name, address, phone, legalNumber })
              setShowModal(true)
            }}
            >Edit
            </button>
          }
          </>
        )
      }
    }
  ]

  const getCompanies = async () => {
    try {
      const { data } = await getCompany()
      setCompaniesData(data?.data?.reverse())
      setLoading(false)
    } catch (error) {
      manageErrorAuth(error?.response?.status)
      setLoading(false)
    }
  }

  useEffect(() => {
    setCompaniesData([])
    getCompanies()
  }, [doAgainRequest])

  const filteredItems = companiesData.filter(
    item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  )

  const reload = () => {
    setCompaniesData([])
    getCompanies()
  }

  return {
    filterText,
    setFilterText,
    columns,
    filteredItems,
    loading,
    companiesData,
    setDoAgainRequest,
    reload
  }
}
