import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { getAuth } from "firebase/auth";
import { app } from './../Firebase/firebase.init';
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {


const [user,setUser]=useState(null);
const createUser  = (email,password)=>{
  return createUserWithEmailAndPassword(auth, email, password);
}

const logInUser = (email,password)=>{
  return  signInWithEmailAndPassword(auth,email,password);
}

const logOut = ()=>{
  return signOut(auth)
}

useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,currentUser=>{
   
    setUser(currentUser)
  });
  return ()=>{
    unsubscribe();
  }
},[])


const authInfo = {
  user,createUser,logInUser,logOut
}
    return (
      <AuthContext.Provider value={authInfo}>
            {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;