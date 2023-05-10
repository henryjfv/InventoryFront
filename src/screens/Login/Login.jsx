import '../../styles/css/components/login.css'
import loginSvg from '../../assets/svg/loginImg.svg'
import registerSvg from '../../assets/svg/registerImg.svg'
import { FaGithub, FaTwitter, FaLinkedin, FaUserAlt, FaLock, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

import { useLogin } from './hooks/useLogin'
// import { FormRegister } from '../../components/Login/FormRegister'
// import { FormLogin } from '../../components/Login/FormLogin'
// import loading from '../../assets/loading.gif'

export const Login = () => {
  const {
    showLoginOrRegister,
    flagScreens, // this is a functions, just change between forms login and register
    handelSubmit,
    seePassword,
    activatePassword,
    password,
    changePassword,
    email,
    changeEmail
  } = useLogin()

  return (
    <>
      <div className={`container ${showLoginOrRegister && 'sign-up-mode'}`}>
        <div className='forms-container'>
          <div className='signin-signup'>
            <form action='#' className='sign-in-form' onSubmit={handelSubmit}>
              <h2 className='title'>Welcome</h2>
              <div className='input-field'>
                <i><FaUserAlt /></i>
                <input type='text' placeholder='Email' value={email} onChange={changeEmail} />
              </div>
              <div className='input-field'>
                <i><FaLock /></i>
                <input type={seePassword ? 'text' : 'password'} placeholder='Password' value={password} onChange={changePassword} />
                <i onClick={activatePassword}>{!seePassword ? <FaRegEye /> : <FaRegEyeSlash />}</i>
              </div>
              <input type='submit' value='Login' className='btn solid' />
              <p className='social-text'>Follow me</p>
              <div className='social-media'>
                <a target='_blank' href='https://twitter.com/HEFEVI91' className='social-icon' rel='noreferrer'>
                  <FaTwitter />
                </a>
                <a target='_blank' href='https://github.com/henryjfv' className='social-icon' rel='noreferrer'>
                  <FaGithub />
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/henryjosefernandez-villarreal/' className='social-icon' rel='noreferrer'>
                  <FaLinkedin />
                </a>
              </div>
            </form>
            <form action='#' className='sign-up-form'>
              <h2 className='title'>Sign up</h2>
              <div className='input-field'>
                <i className='fas fa-user' />
                <input type='text' placeholder='Username' />
              </div>
              <div className='input-field'>
                <i className='fas fa-envelope' />
                <input type='email' placeholder='Email' />
              </div>
              <div className='input-field'>
                <i className='fas fa-lock' />
                <input type='password' placeholder='Password' />
              </div>
              <input type='submit' className='btn' value='Sign up' />
              <p className='social-text'>Or Sign up with social platforms</p>
              <div className='social-media'>
                <a target='_blank' href='https://twitter.com/HEFEVI91' className='social-icon' rel='noreferrer'>
                  <FaTwitter />
                </a>
                <a target='_blank' href='https://github.com/henryjfv' className='social-icon' rel='noreferrer'>
                  <FaGithub />
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/henryjosefernandez-villarreal/' className='social-icon' rel='noreferrer'>
                  <FaLinkedin />
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className='panels-container'>
          <div className='panel left-panel'>
            <div className='content'>
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <button className='btn transparent' onClick={flagScreens}>
                Sign up
              </button>
            </div>
            <img src={loginSvg} className='image' alt='login' />
          </div>
          <div className='panel right-panel'>
            <div className='content'>
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className='btn transparent' onClick={flagScreens}>
                Sign in
              </button>
            </div>
            <img src={registerSvg} className='image' alt='register' />
          </div>
        </div>
      </div>
    </>
  )
}
// {
//   !isLoading
//     ? !isActivate
//       ? <FormLogin
//         flagScreens={flagScreens}
//         submitData={submit}
//       />
//       : <FormRegister flagScreens={flagScreens} />
//     : <img width={100} height={30} className='loadingDots' src={loading} alt='loading...' />
// }
// {
//   error && <span className='errorInput'>Something went wrong</span>
// }
