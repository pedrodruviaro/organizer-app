import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, firebase } from '../services/firebase'

// context
export const AuthContext = createContext()

// hook
export function useAuth(){
    const value = useContext(AuthContext)
    return value
}

// provider
export default function AuthContextProvider(props) {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {

            if(user){
                
                setIsAuthenticated(true)
                const { displayName, photoURL, uid } = user

                if(!displayName || !photoURL) {
                    throw new Error ("Missing information from Google account")
                }

                setUser({
                    name: displayName,
                    avatar: photoURL,
                    id: uid
                })
            }
        })

        return () => unsubscribe()

    }, [])

    async function signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider()
        const results = await auth.signInWithPopup(provider)

        if(results.user){
                
            setIsAuthenticated(true)
            const { displayName, photoURL, uid } = results.user

            if(!displayName || !photoURL) {
                throw new Error ("Missing information from Google account")
            }

            setUser({
                name: displayName,
                avatar: photoURL,
                id: uid
            })
        }
    }

    async function logOut(){
        await auth.signOut()
        setUser(null)
        setIsAuthenticated(false)
    }


    return (
        <AuthContext.Provider value={{user, signInWithGoogle, isAuthenticated, logOut}}>
            {props.children}
        </AuthContext.Provider>
    )
}
