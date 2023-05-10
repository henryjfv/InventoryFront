import '../../styles/css/components/login.css'

export const FormRegister = ({ flagScreens }) => {
  return (
    <>
      <form
        className='register-form'
      >
        <input type='email' placeholder='email' />
        <input type='password' placeholder='password' />
        <input type='password' placeholder='repeat password' />
        <button>create</button>
        <p className='message' onClick={flagScreens}>
          Already registered? <a href='#'>Sign In</a>
        </p>
      </form>
    </>
  )
}
