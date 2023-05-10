import { isNotEmpty, isValidEmail } from '../../utils/validator'

export const SendEmail = ({ email, setEmail }) => {
  return (
    <>
      <h3 className='title'>Send inventory</h3>
      <span>Please write a email</span>
      <form className='form-register' style={{ marginTop: '10px' }}>
        <div>
          <input type='email' placeholder='Email*' value={email} onChange={({ target }) => setEmail(target.value)} />
          {!isNotEmpty(email) && <span className='errorInput'>This field don't be empty</span>}
          {!isValidEmail(email) && <span className='errorInput'>This field need to be a good format email</span>}
        </div>
      </form>
    </>
  )
}
