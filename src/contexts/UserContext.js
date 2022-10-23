import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {

    const [user, setUser] = useState({name: "Rubel"});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = { user, setUser, createUser }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;