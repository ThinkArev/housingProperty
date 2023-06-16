import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'


const OAuth = () => {
    return (
        <div>
            OAuth
        </div>
    )
}

export default OAuth
