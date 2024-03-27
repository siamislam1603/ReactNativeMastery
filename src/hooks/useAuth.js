import {createContext, useContext, useState} from 'react'

const AuthContext = createContext()
const initialState = {user: 'df'}

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(initialState)
  return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>
}

export default function useAuth() {
  const authContext = useContext(AuthContext)
  return authContext
}
