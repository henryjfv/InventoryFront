import '../../styles/css/components/modal.css'
export const Modal = ({ nameAffirmButton, handleAffirm, handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <div className='content-buttons'>
          <button className='buttons' style={{ backgroundColor: '#fc1845' }} onClick={handleClose}>close</button>
          {nameAffirmButton && <button className='buttons' onClick={handleAffirm}>{nameAffirmButton}</button>}
        </div>
      </section>
    </div>
  )
}
