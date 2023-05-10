import { createContext, useState } from 'react'

export const UserContext = createContext({ email: null, role: null, token: null })

export const UserContextProvider = ({ children }) => {
  const [contextData, setContextData] = useState()
  const value = { contextData, setContextData }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
