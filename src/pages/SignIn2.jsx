import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ReactComponentElement as ArrowRightIcon } from '../assests/svg/keyboardArrowRightIcon'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

const SignIn2 = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    
    const [email, password] = formData
    const navigate = useNavigate() 
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.id]: e.target.value
        }))
    }


    return (
        <div>
            <form>
                <input type="text" className="username" placeholder='enter an email' onChange={onChange} />

                <div className="passwordInputDiv">
                    <input type={showPassword ? 'text' : 'password'} className="password" placeholder="enter ur password" id="password" onChange={onChange } />
                </div>
                <img src={visibilityIcon} alt='showPassword' className='showPassword' onClick={() => setShowPassword((prevstate) => !prevstate)} />
                
                <Link to='/forgotPassword' className='forgotPasswordLink'> 
                Forgot Password    
                </Link>

            </form >
        </div >
    )
}

export default SignIn2
