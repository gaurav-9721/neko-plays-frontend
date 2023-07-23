import { createContext, useContext, useEffect, useState } from 'react';
import API from '../api'

const AuthContext = createContext({
  auth: null,
  setAuth: () => {},
  user: null,
});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    
    const isAuth = async () => {
        try{
          
            const res = await API.get('/userloggedin', {
                
                headers: {
                  "Content-type": 'application/json',
                  Accept: 'application/json',
                
                },
          
              })

              
              if(res.data.login){
                
                setAuth(true)
              }
              else{
                setAuth(false)
              }
        }
        catch (err){
            console.log(err)
            setAuth(false)
        }
    };

    isAuth();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export {useAuth};