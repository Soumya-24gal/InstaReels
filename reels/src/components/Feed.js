import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/Authcontext'
export default function Feed() {
  const {logout}=useContext(AuthContext)
  return(
    <div>Feed
      <button onClick={logout}>
        Log out
      </button>
    </div>
    
  )
}
