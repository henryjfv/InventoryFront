import { BiPlusCircle, BiRefresh } from 'react-icons/bi'
import DataTable from 'react-data-table-component'
import { getLocalStorage } from '../../utils/useStorage'

export const Company = ({ reload, setShowModal, filterText, setFilterText, loading, columns, filteredItems }) => {
  const role = getLocalStorage('role')
  return (
    <>
      <div className='container-home'>
        {role === 'admin' && <button className='company-button' onClick={() => setShowModal(true)}>New Company <BiPlusCircle className='icon-company' size={20} /> </button>}
        <div className='card'>
          <button className='company-button-refresh' onClick={() => reload()}><BiRefresh size={100} /></button>
          <h3 className='title'>Companies</h3>
          <input placeholder='Search a company' type='text' className='filter' value={filterText} onChange={({ target }) => { setFilterText(target.value) }} />

          <DataTable
            progressPending={loading}
            columns={columns}
            data={filteredItems}
            direction='auto'
            fixedHeaderScrollHeight='300px'
            pagination
            responsive
            subHeaderAlign='right'
            subHeaderWrap
          />
        </div>
      </div>
    </>
  )
}
