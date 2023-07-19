import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ReactComponentElement as ArrowRightIcon } from "../assests/svg/keyboardArrowRightIcon";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { setDoc, doc, serverTimeStamp } from '/firebase/firestore'
const SignUp2 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [name, email, password] = formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email, 
            password
        )

        const user = userCredential.user

        updateProfile(auth.currentUser, {
    displayName : name,
        })

        const formDataCopy = { ...formData } 
        delete formDataCopy.password
        formDataCopy.timestamp = serverTimeStamp() 
        await setDoc(doc(db, 'users' , user))  
        navigate('/')
        
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="nameInput"
          placeholder="enter ur name"
          onChange={onChange}
          id="name"
          value={name}
        />

        <input
          type="text"
          className="emailInput"
          placeholder="enter an email"
          onChange={onChange}
          id="email"
          value={email}
        />

        <div className="passwordInputDiv">
          <input
            type={showPassword ? "text" : "password"}
            className="password"
            placeholder="enter ur password"
            id="password"
            onChange={onChange}
            value={password}
          />
        </div>
        <img
          src={visibilityIcon}
          alt="showPassword"
          className="showPassword"
          onClick={() => setShowPassword((prevstate) => !prevstate)}
        />

        <Link to="/forgotPassword" className="forgotPasswordLink">
          Forgot Password
        </Link>
      </form>
    </div>
  );
};

export default SignUp2;
