import firebaseConfig from "./LoginPage/firebase.config"
import { initializeApp } from "firebase/app";
const initApp = ()=>{
    initializeApp(firebaseConfig)
}

export default initApp;