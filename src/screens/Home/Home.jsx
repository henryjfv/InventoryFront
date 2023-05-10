import '../../styles/css/components/home.css'
import { useState, useEffect } from 'react'
import { useHome } from './hook/useHome'
import { Modal } from '../../components/Modal/Modal'
import { Register } from '../../components/company/Register'
import { useRegister } from '../../components/company/hooks/useRegister'
import { Company } from '../../components/company/Company'

export const Home = () => {

  const [showModal, setShowModal] = useState(false)
  const [showModalDeleteCompany, setShowModalDeleteCompany] = useState(false)

  const {
    filterText,
    setFilterText,
    columns,
    filteredItems,
    loading,
    setDoAgainRequest,
    reload
  } = useHome({ setShowModalDeleteCompany, setIdCompany })

  const {
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
  } = useRegister() // Company register


  useEffect(() => {
    reload()
    setDoAgainRequest('execute')
    setShowModal(false)
  }, [load])

  return (
    <>
      <Company
        setShowModal={setShowModal}
        setShowModalDelete={setShowModalDeleteCompany}
        filterText={filterText}
        setFilterText={setFilterText}
        columns={columns}
        filteredItems={filteredItems}
        loading={loading}
        reload={reload}
      />
      <Modal
        show={showModal}
        handleClose={() => setShowModal(false)}
        nameAffirmButton='Register'
        handleAffirm={() => submitData()}
      >
        <Register
          handleSubmit={handleSubmit}
          legalNumber={legalNumber}
          setLegalNumber={setLegalNumber}
          name={name}
          setName={setName}
          address={address}
          setAddress={setAddress}
          phone={phone}
          setPhone={setPhone}
        />
      </Modal>
      <Modal
        show={showModalDeleteCompany}
        handleClose={() => {
          setIdCompany('')
          setShowModalDeleteCompany(false)
        }}
        nameAffirmButton='Delete'
        handleAffirm={() => deleteData()}
      >
        <>
          <h3>Are you sure, this can't be return back</h3>
        </>
      </Modal>
    </>
  )
}
