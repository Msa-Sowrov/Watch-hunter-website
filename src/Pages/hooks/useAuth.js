import { useContext } from "react"
import { authContext } from "../Context/AuthContextProvider"

const useAuth = ()=>{
    return useContext(authContext)
}
export default useAuth;