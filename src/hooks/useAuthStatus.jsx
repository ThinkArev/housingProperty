import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)


    useEffect(() => {
        const auth = getAuth()
        try {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log(user, 'user')
                    setLoggedIn(true)
                }
                setCheckingStatus(false)
            })
        } catch (error) {
            console.log(error, 'auth error')
        }
    }, [])


    return { loggedIn, checkingStatus }
}