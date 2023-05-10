import { useEffect, useState } from 'react'
import { getInventory } from '../../../services/inventory'
import { manageErrorAuth } from '../../../utils/auth'

export const useInventory = ({ id, setShowModalDeleteProduct }) => {
  const [filterText, setFilterText] = useState('')
  const [loading, setLoading] = useState(true)

  const [inventoryData, setInventoryData] = useState([])
  const [idProduct, setIdProduct] = useState('')

  const columns = [
    {
      name: 'Product',
      selector: row => row.product,
      sortable: true
    },
    {
      name: 'Total',
      selector: row => row.total,
      sortable: true
    },
    {
      name: '',
      sortable: false,
      cell: (row, index, column, id) => {
        const { _id } = row
        return (
          <> {
            <button className='danger' style={{ width: '100px' }} onClick={() => {
              setIdProduct(_id)
              setShowModalDeleteProduct(true)
            }}
            >Delete
            </button>
          }
          </>
        )
      }
    },
  ]

  const getInventoriesData = async () => {
    try {
      const { data } = await getInventory({ id })
      setInventoryData(data?.data)
      setLoading(false)
    } catch (error) {
      manageErrorAuth(error?.response?.status)
      setLoading(false)
    }
  }

  useEffect(() => {
    getInventoriesData()
  }, [])

  const filteredItems = inventoryData.filter(
    item => item.product && item.product.toLowerCase().includes(filterText.toLowerCase())
  )

  const reload = () => {
    setInventoryData([])
    setTimeout(() => {
      getInventoriesData()
    }, 200)
  }

  return {
    filterText,
    setFilterText,
    columns,
    filteredItems,
    loading,
    inventoryData,
    reload,
    idProduct,
    setIdProduct
  }
}
