import { useContext } from 'react'
import { UserContext } from '../dataContext'

export const useUserContext = () => {
  const contextData = useContext(UserContext)
  if (!contextData) throw new Error('useDataContext must ne used within a DataContextProvider')
  return contextData
}
