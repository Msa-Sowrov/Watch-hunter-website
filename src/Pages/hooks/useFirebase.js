import { getAuth,onAuthStateChanged, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";
import initApp from "../Login/firebase.init";

const useFirebase = () =>{
    initApp()
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const auth = getAuth();
    
    //sign up
    const signUp = (email, password, name)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user)
            setError('')
            setUserName(name)
            window.location.reload()
          })
  .catch((error) => {
    setError(error)
  })
    }
    const setUserName =(name)=>{
      updateProfile(auth.currentUser, {displayName: name})
        .then(()=>{

        })
    }
      //login
      const login = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error)
            });
    }

    //logout
    const logOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          
    }
    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
              setUser(user)   
          } else {
            setUser({})
          }
        });
  },[])



    return{
        signUp,
        user,
        error,
        login,
        logOut
    }
}
export default useFirebase