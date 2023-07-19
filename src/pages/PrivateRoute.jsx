import { Navigate, Outlet } from "react-router-dom";

import React from 'react'

const PrivateRoute = () => {

    const loggedin = false
  return loggedin ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute
