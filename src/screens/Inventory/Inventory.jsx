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
  const {
    filterText,
    setFilterText,
    columns,
    filteredItems,
    loading,
    inventoryData,
    reload
  } = useInventory(id)

  const {
    product,
    setProduct,
    total,
    setTotal,
    submitData,
    load
  } = useRegister() // Inventory register

  const { email, setEmail, submitSendEmail, loadEmail } = useSendEmail()

  const [showModal, setShowModal] = useState(false)
  const [showModalEmail, setShowModalEmail] = useState(false)

  useEffect(() => {
    console.log('load again inventory')
    reload()
    setShowModal(false)
  }, [load])

  useEffect(() => {
    console.log('close email')
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
    </>
  )
}
