import { getAuth,onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";
import initApp from "../Login/firebase.init";

const useFirebase = () =>{
    initApp()
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const [loding, setLoding] = useState(true)
    const auth = getAuth();
    
    //sign up
    const signUp = (email, password, name)=>{
      createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
           setLoding(true)
            setUser(result.user)
            setError('')
            setUserName(name)
            window.location.reload()
          })
  .catch((error) => {
    setError(error)
  })
  .finally(
        setLoding(false)
      )
    }
    const setUserName =(name)=>{
      updateProfile(auth.currentUser, {displayName: name})
        .then(()=>{

        })
    }
      //login
      const login = (email, password)=>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
            .finally(
              setLoding(false)
            )
    }

    //logout
    const logOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
            setLoding(true)
          })
          .catch((error) => {
            // An error happened.
          })
          .finally(
        setLoding(false)

          )
          
    }
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user)   
          } else {
            setUser({})
          }
          setLoding(false)
        });
      },[])
      

    return{
        signUp,
        user,
        error,
        login,
        logOut,
        loding
    }
}
export default useFirebase