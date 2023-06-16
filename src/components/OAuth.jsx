import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { googleIcon } from  '../assets/svg/googleIcon.svg'

const OAuth = () => {
    
    const navigate = useNavigate()
    const location = useLocation()

    const onGoogleClick = () => {
        try {
            
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            // const result = await signInWithPopup(auth, provider)
            // const user = result.user

        }
        
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            OAuth
        </div>
    )
}

export default OAuth
