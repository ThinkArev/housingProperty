import { useState, useEffect } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
import { updateDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
const Profile = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth()

  useEffect(() => {
    console.log(auth.currentUser)
    setUser(auth.currentUser)
  }, [])

  const [formData, setFormData] = useState
    ({
      name: auth?.currentUser?.displayName,
      email: auth?.currentUser?.email,
    })
  const [changeDetails, setChangeDetails] = useState()

  const navigate = useNavigate()
  const onLogout = () => {
    auth.signOut()
  }
  return <div className='profile'>
    <header className="profileHeader">
      <p className="pageHeader">My Profile</p>
      <button type='button' className="logOut" onClick={onLogout}>
        Log Out
      </button>
    </header>
    <main>
      <div className='profileDetailHeader'>
        <p className="profileDatailsText">
          <p className="changePersonalDetails" onClick={() => {
            changeDetails && onsubmit()
            setChangeDetails((prevState) => !prevState)

          }}>
            {changeDetails ? 'done' : 'change'}
          </p>
        </p>
      </div>
    </main>
  </div>
}

export default Profile