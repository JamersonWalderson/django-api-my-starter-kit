import { setCookie } from "nookies"
import { createContext } from "react"
import API from "../services/axios"
import { GetServerSidePropsContext } from 'next';

interface AuthContextType {
  signIn: any;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}) {

  async function signIn(email: string, password: string) {
    // const response = await API.post("/api/login", {
    //   email: email,
    //   password: password
    // })

    const response = await API.get("/v1/services")

    console.log(response)
    return response;
  }

  return (
    <AuthContext.Provider value={{signIn}}>
      {children}
    </AuthContext.Provider>
  )
}