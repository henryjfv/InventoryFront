import { Link } from 'react-router-dom'

export const Navbar = ({ emailUser, roleUser, logout }) => {
  return (
    <>
      <ul className='topnav'>
        <li>
          <h1 className='title'>
            {emailUser}
          </h1>
          <h4 className='subtitle'>{roleUser}</h4>
        </li>
        <li className='right'>
          <Link to='/login' onClick={() => { logout() }}>Logout
          </Link>
        </li>
        <li className='right'><Link to='/' className='activate'>Home</Link></li>
      </ul>
    </>
  )
}
