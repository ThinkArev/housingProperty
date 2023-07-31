import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'

const PrivateRoute = () => {

  const { loggedIn, checkingStatus } = useAuthStatus()

  useEffect(() => {
    console.log('I have rednered')
  }, [])

  console.log(loggedIn, checkingStatus, 'I am custome hooks')
  if (checkingStatus)
    return <h3>Loading ...</h3>

  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />

}


export default PrivateRoute

