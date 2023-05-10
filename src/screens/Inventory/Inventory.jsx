import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useInventory } from '../../components/Inventory/hooks/useInventory'
import { Inventory } from '../../components/Inventory/Inventory'
import { Modal } from '../../components/Modal/Modal'
import { Register } from '../../components/Inventory/Register'
import { useRegister } from '../../components/Inventory/hooks/useRegister'
import { SendEmail } from '../../components/Inventory/SendEmail'
import { useSendEmail } from '../../components/Inventory/hooks/useSendEmail'

export const InventoryScreen = () => {
  const { id, companyName } = useParams()

  const [showModal, setShowModal] = useState(false)
  const [showModalEmail, setShowModalEmail] = useState(false)
  const [showModalDeleteProduct, setShowModalDeleteProduct] = useState(false)

  const { email, setEmail, submitSendEmail, loadEmail, downloadPdf } = useSendEmail({ companyName, id })

  const {
    filterText,
    setFilterText,
    columns,
    filteredItems,
    loading,
    inventoryData,
    reload,
    idProduct,
    setIdProduct
  } = useInventory({ id, setShowModalDeleteProduct })

  const {
    product,
    setProduct,
    total,
    setTotal,
    submitData,
    load,
    setLoad,
    deleteData
  } = useRegister() // Inventory register

  useEffect(() => {
    reload()
    setShowModal(false)
    setShowModalDeleteProduct(false)
    setLoad(false)
  }, [load])

  useEffect(() => {
    setShowModalEmail(false)
  }, [loadEmail])

  return (
    <>
      <Inventory
        id={id}
        setShowModal={setShowModal}
        filterText={filterText}
        setFilterText={setFilterText}
        columns={columns}
        filteredItems={filteredItems}
        loading={loading}
        inventoryData={inventoryData}
        setShowModalEmail={setShowModalEmail}
        downloadPdf={downloadPdf}
        reload={reload}
      />
      <Modal
        show={showModal}
        handleClose={() => setShowModal(false)}
        nameAffirmButton='Register'
        handleAffirm={() => submitData(id)}
      >
        <Register
          product={product}
          setProduct={setProduct}
          total={total}
          setTotal={setTotal}
        />
      </Modal>
      <Modal
        show={showModalEmail}
        handleClose={() => setShowModalEmail(false)}
        nameAffirmButton='Send'
        handleAffirm={() => submitSendEmail(email, companyName, id)}
      >

        <SendEmail
          email={email}
          setEmail={setEmail}
        />
      </Modal>
      <Modal
        show={showModalDeleteProduct}
        handleClose={() => {
          setIdProduct('')
          setShowModalDeleteProduct(false)
        }}
        nameAffirmButton='Delete'
        handleAffirm={() => deleteData(idProduct)}
      >
        <>
          <h3>Are you sure, this can't be return back</h3>
        </>
      </Modal>
    </>
  )
}
