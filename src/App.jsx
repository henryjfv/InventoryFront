import { Route, Routes } from 'react-router-dom'
import { Home } from './screens/Home/Home'
import { Login } from './screens/Login/Login'
import { ProtectedRoute, ProtectedLogin } from './utils/auth'
import { InventoryScreen } from './screens/Inventory/Inventory'
import { Navbar } from './components/navbar/navbar'
import { useNavbar } from './components/navbar/hooks/useNavbar'
import { getLocalStorage } from './utils/storage'

export const App = () => {
  const existToken = getLocalStorage('token') ?? false

  const { emailUser, roleUser, logout } = useNavbar()
  return (
    <>
      {existToken && <Navbar emailUser={emailUser} roleUser={roleUser} logout={logout} />}
      <Routes>
        <Route
          index
          path='/'
          element={
            <ProtectedRoute existToken={existToken}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path='/login' element={
            <ProtectedLogin existToken={existToken}>
              <Login />
            </ProtectedLogin>
          }
        />
        {roleUser === 'Admin' && <Route path='/inventory/:id/:companyName' element={<InventoryScreen />} />}
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>

  )
}
