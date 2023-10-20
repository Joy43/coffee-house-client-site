import { createContext, useState, } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebse/firebase.config";

const auth = getAuth(app);
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setloading]=useState(true);
// password auth
const createUser=(email,password)=>{
    setloading(true)
return createUserWithEmailAndPassword  (auth,email,password)  
}

    const userInfo={
        user,
        loading,
        createUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;