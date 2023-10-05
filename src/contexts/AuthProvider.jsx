import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
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

     //current user observer 
     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
               console.log("current user", currentUser);

               if (currentUser.uid) {
                    setUser(currentUser);
               }
          })

          // clear
          return () => unsubscribe();
     }, [])

     const authIfo = {
          user, loading, createNewUser
     }

     return (
          <AuthContext.Provider value={authIfo}>
               {children}
          </AuthContext.Provider>
     )
}

export default AuthProvider;
