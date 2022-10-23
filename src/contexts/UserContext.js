import React, { createContext, useEffect, useState } from 'react';
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,  
    updateProfile, 
    signOut, 
    GoogleAuthProvider, 
    signInWithPopup, 
    FacebookAuthProvider 
} from "firebase/auth";

import app from '../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider()

    const handleGoogleSignin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const handleFacebookSignin = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const [user, setUser] = useState({name: "Rubel"});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignOut = () => {
        return signOut(auth)
    }

    const updateUserInfo = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])


    const userInfo = { 
        user, 
        setUser, 
        createUser, 
        userLogin, 
        updateUserInfo, 
        userSignOut,
        handleGoogleSignin,
        handleFacebookSignin
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;