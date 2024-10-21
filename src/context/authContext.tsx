import { createContext, useContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {auth} from '@/firebase/firebase'

// Create a context variable
export const AuthContext = createContext({});

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}

type User = {
    email: string;
    password: string;
}

export function AuthProvider({ children }: any) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = ({email, password} : User) => createUserWithEmailAndPassword(auth, email, password)

    const login = async ({email, password }: User) =>{ 
        const userCredentials = await signInWithEmailAndPassword(auth, email, password) 
        console.log(userCredentials)
    }

    const logout = () => signOut(auth)

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()

        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{signup, login, user, logout, loading, loginWithGoogle}}>{children}</AuthContext.Provider>
    )
}