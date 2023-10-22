import { createContext, useEffect, useState } from 'react';
import {
     GoogleAuthProvider,
     createUserWithEmailAndPassword,
     onAuthStateChanged,
     signInWithEmailAndPassword,
     signInWithPopup,
     signOut,
     updateProfile
} from 'firebase/auth';
import { auth } from '../Config/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     //google login
     const googleProvider = new GoogleAuthProvider();
     const signInWithGoogle = () => {
          setLoading(true);
          return signInWithPopup(auth, googleProvider);
     }

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
               // console.log("current user", currentUser );

               // set current user
               setUser(currentUser);
               // get and  set token
               if (currentUser !== null) {
                    axios.post("/jwt", { email: currentUser.email })
                         .then(result => {
                              // console.log(result.data);
                              localStorage.setItem('access-token', result.data)
                              setLoading(false);
                         })
               } else {
                    localStorage.removeItem("access-token");
               }
          })
          setLoading(false);
          // clean up
          return () => unsubscribe();
     }, [])

     const authIfo = {
          user,
          loading,
          signInWithGoogle,
          createNewUser,
          updateUser,
          userSignIn,
          userSignOut
     }

     return (
          <AuthContext.Provider value={authIfo}>
               {children}
          </AuthContext.Provider>
     )
}

export default AuthProvider;
