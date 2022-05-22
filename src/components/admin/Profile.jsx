import React from 'react'
import '../../css/profile.css'
import { useUserAuth } from '../../context/UserAuthContext'

const Profile = () => {
    const { user } = useUserAuth();
  return (
    <div className='profile'>
        <h1 className='profile-header'>Profile</h1>
        <div className="profile-card">
            { user && <img src={user.photoURL} alt="" />}
            {user && (<p><b>Name:</b> <span>{user.displayName}</span></p>) }
            {user && (<p><b>Email:</b> <span>{user.email}</span></p>) }
            
        </div>
    </div>
  )
}

export default Profile