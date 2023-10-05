import { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
     const user = { name: "rony" }

     const authIfo = {
          user
     }

     return (
          <AuthContext.Provider value={authIfo}>
               {children}
          </AuthContext.Provider>
     )
}

export default AuthProvider;
