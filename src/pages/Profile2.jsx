import React from 'react'
import {getAuth} from 'firebase/auth'
import { useState, useEffect } from 'react'
const Profile2 = () => {
    const [user, setUser] = useState('string')
    const auth = getAuth()

    useEffect(() => {
        console.log(user)
        console.log(auth.currentUser)
        setUser(auth.currentUser)
        console.log(user)
    }, [])
    

    return (<div >Profile</div>)
}

export default Profile2
