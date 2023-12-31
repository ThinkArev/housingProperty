import { useState, useEffect } from 'react'
import { getAuth, updateProfile } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/\homeIcon.svg'
const Profile = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth()
  const navigate = useNavigate()
  useEffect(() => {
   console.log('úseEffect', auth.currentUser?.email ,)
    setUser(auth.currentUser)
  },[user])

  const [formData, setFormData] = useState
    ({
      name: auth?.currentUser?.displayName,
      email: auth?.currentUser?.email,
    })
  const { name, email } = formData

  const [changeDetails, setChangeDetails] = useState(false)

  const onLogout = () => {
    auth.signOut()
    console.log(auth)
    navigate('/')
  }

  const onSubmit = async () => {
    console.log("true")

    try { 
      if (auth.currentUser.displayName !== name) {
        //update display name in fb
        await updateProfile(auth.currentUser, {
          displayName : name
        })

      }
      // update in firestore 
      const userRef = doc(db, 'users', auth.currentUser.uid)
      await updateDoc(userRef, { 
        name: name
      })
    }
    catch (error) {
    toast.error('Çould noy update profile details') 
    }
  }

  const onChange = (e) => {
    setFormData((prevstate) => ({
      ...prevstate,
      [e.target.id]: e.target.value,
    }))
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
        <p className="profileDetailsText">
          Personal Details
        </p >

        <p className="changePersonalDetails" onClick={() => {
          changeDetails && onSubmit()
          setChangeDetails((prevState) => !prevState)

        }}>

          {changeDetails ? 'done' : 'change'}
        </p>
      </div>
      <div className="profileCard">
        <form>
          <input type='text' id='name'
            className={!changeDetails ? 'profileName' : 'profileNameActive'}
            disabled={!changeDetails}
            value={name}
            onChange={onChange} />

          <input type='text' id='email'
            className={!changeDetails ? 'profileEmail' : 'profileEmailActive'}
            disabled={!changeDetails}
            value={email}
            onChange={onChange} />
        </form>
      </div>
      <Link tp='/create-listing' className='createListing' />
      <img src={homeIcon} alt="home" />
      <p> Sell or rent your home</p>
      <img src={arrowRight} alt="arrow Right" />
    </main>
  </div>
}

export default Profile