
export const FormLogin = ({ flagScreens, submitData }) => {

  return (
    <>
      <form
        className='login-form'
      >
        <div className='form-control'>
          <input type='text' placeholder='email' value={email} onChange={changeEmail} />

        </div>
        {errorEmail && <span className='errorInput'>Please check your email</span>}
        <div className='form-control form-control-password'>
          <input type={!seePassword ? 'password' : 'text'} placeholder='password' value={password} onChange={changePassword} />
          <div className='icon' onClick={showPassword}>{!seePassword ? <BiShow size='15px' /> : <BiHide size='15px' />}</div>
        </div>
        {errorPassword && <span className='errorInput'>Password don't should be empty</span>}
        <button type='submit'>login</button>
        <p className='message' onClick={flagScreens}>
          Not registered? <a href='#'>Create an account</a>
        </p>
      </form>
    </>
  )
}
