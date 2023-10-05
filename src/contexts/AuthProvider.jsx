import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Config/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     // create new user
     const createNewUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
     }

     //user update profile
     const updateUser = (userInfo) => {
          return updateProfile(auth.currentUser, userInfo);
     }

     // user signIn
     const userSignIn = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
     }

     // sign out user
     const userSignOut = () => {
          setLoading(true);
          return signOut(auth);
     }

     //current user observer 
     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
               console.log("current user", currentUser);

               // set current user
               setUser(currentUser);
          })

          // clear
          return () => unsubscribe();
     }, [])

     const authIfo = {
          user, loading, createNewUser, updateUser, userSignIn, userSignOut
     }

     return (
          <AuthContext.Provider value={authIfo}>
               {children}
          </AuthContext.Provider>
     )
}

export default AuthProvider;
