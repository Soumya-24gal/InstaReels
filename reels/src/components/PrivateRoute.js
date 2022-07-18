import React,{useContext} from 'react'
// import { Redirect } from 'react-router'
import { Route,Navigate } from 'react-router-dom'
import { AuthContext } from '../context/Authcontext'
export default function PrivateRoute({ children }) {
    const{user}=useContext(AuthContext)
    return user? children : <Navigate to="/login" />;
  }
 