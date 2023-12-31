import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify' 
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
// import { signInWithEmailAndPassword } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)

    const { email, password } = formData
    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log('user has been loggedin')
        try {
            const auth = getAuth()
            const userCredential = await signInWithEmailAndPassword(
                auth, email, password)
            console.log("try", userCredential)

            if (userCredential.user) {
                navigate('/profile')
                console.log("users ",userCredential.user)
            }

        }
        catch (error) {
            alert(error);
        }

    }
    return (
        <div className='pageContainer '>
            <header>
                <p className="pageHeader">Welcome back</p>
            </header>
            <form onSubmit={onSubmit}>
                <input type="email"
                    className='emailInput'
                    placeholder='Email'
                    id='email' value={email}
                    onChange={onChange} />

                <div className="passwordInputDiv">

                    <input type={showPassword ? 'text' : 'password'}
                        className='passwordInput'
                        placeholder='Password'
                        id='password'
                        value={password}
                        onChange={onChange}

                    />
                    <img
                        src={visibilityIcon}
                        alt='show password'
                        className='showPassword'
                        onClick={() => setShowPassword((prevState) => !prevState)}
                    />
                    {/* <img
                        src={visibilityIcon}
                        alt="show password" className='showPassword'
                        onClick={() => setShowPassword((prevState) => !prevState)} /> */}

                </div>
                <Link to='/forgot-password' className='forgotPasswordLink' >forgot Password</Link>

                <div className="signInBar">
                    <p className="signInText">Sign In</p>
                    <button className="signInButton"><ArrowRightIcon fill='$ffffff' width='34px' height='34px' />
                    </button>
                </div>
            </form>

            {/* { Google OAUth} */}

            <Link to='/sign-up' className='registerLink'>
                Sign up Instead
            </Link>
        </div>
    )
}

export default SignIn
