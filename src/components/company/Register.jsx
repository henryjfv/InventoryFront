import '../../styles/css/components/register.css'
import { isNotEmpty } from '../../utils/validator'

export const Register = ({
  handleSubmit,
  legalNumber,
  setLegalNumber,
  name,
  setName,
  address,
  setAddress,
  phone,
  setPhone
}) => {
  return (
    <>
      <h3 className='title'>Create a new company</h3>
      <form className='form-register' onSubmit={handleSubmit}>
        <div>
          <input type='number' placeholder='NIT*' value={legalNumber} onChange={({ target }) => setLegalNumber(target.value)} />
          {!isNotEmpty(legalNumber) && <span className='errorInput'>This field don't be empty</span>}
        </div>
        <div>
          <input type='text' placeholder='Company name*' value={name} onChange={({ target }) => setName(target.value)} />
          {!isNotEmpty(name) && <span className='errorInput'>This field don't be empty</span>}
        </div>
        <div>
          <input type='text' placeholder='Street 123 # 45-67' value={address} onChange={({ target }) => setAddress(target.value)} />
        </div>
        <div>
          <input type='text' placeholder='(602) 344 33 55' value={phone} onChange={({ target }) => setPhone(target.value)} />
        </div>
      </form>
    </>
  )
}
