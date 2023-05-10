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
  const [companyObject, setCompanyObject] = useState({})

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
    updateData,
    load,
    setLoad,
    idCompany,
    setIdCompany,
    deleteData
  } = useRegister() // Company registers

  const {
    filterText,
    setFilterText,
    columns,
    filteredItems,
    loading,
    setDoAgainRequest,
    reload
  } = useHome({ setShowModalDeleteCompany, setIdCompany, setCompanyObject, setShowModal })

  useEffect(() => {
    reload()
    setDoAgainRequest('execute')
    setShowModal(false)
    setShowModalDeleteCompany(false)
    setIdCompany('')
    setCompanyObject({})
    setLoad(false)
  }, [load])

  useEffect(() => {
    setLegalNumber(companyObject?.legalNumber)
    setName(companyObject?.name)
    setAddress(companyObject?.address)
    setPhone(companyObject?.phone)
  }, [companyObject])

  const closeModal = () => {
    setIdCompany('')
    setCompanyObject({})
    setLegalNumber('')
    setName('')
    setAddress('')
    setPhone('')
    setShowModal(false)
  }

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
        handleClose={() => { closeModal() }}
        nameAffirmButton={idCompany.length > 0 ? 'Update' : 'Register'}
        handleAffirm={() => idCompany.length > 0 ? updateData() : submitData()}
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
          idCompany={idCompany}
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
