import React from 'react'
import { useState } from 'react-router-dom'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assests/svg/visibilityIcon.svg'

const SignIn = () => {
    const [showPassword, setPassword] = useState(false)
    
    const [formData, setFormData] = useState({
        
        email: '',
        password: '',
        
    })

    const { email, password } = formData

    return (
        <div className='pageContainer'>
            <header> 
                <p className='pageHeader' > Welcome Back ! </p>
            </header>
            <form > <input type= /></form>
      SignIn
    </div>
  )
}

export default SignIn
