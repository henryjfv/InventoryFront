import '../../styles/css/components/inventory.css'
import { BiPlusCircle, BiRefresh } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import DataTable from 'react-data-table-component'

export const Inventory = ({ reload, setShowModalEmail, setShowModal, filterText, setFilterText, loading, columns, filteredItems }) => {
  return (
    <>
      <div className='container-home'>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <button className='company-button' onClick={() => setShowModalEmail(true)}>Send To <AiOutlineMail className='icon-company' size={20} /> </button>
          <button className='company-button' onClick={() => setShowModal(true)}>New Product <BiPlusCircle className='icon-company' size={20} /> </button>
        </div>
        <div className='card'>
          <button className='company-button-refresh' onClick={() => reload()}><BiRefresh size={100} /></button>
          <h3 className='title'>Products</h3>
          <input placeholder='Search a product' type='text' className='filter' value={filterText} onChange={({ target }) => { setFilterText(target.value) }} />
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
