import React from 'react'
import '../../css/profile.css'
import { useUserAuth } from '../../context/UserAuthContext'

const Profile = () => {
    const { user } = useUserAuth();
  return (
    <div className='profile'>
        <h1 className='profile-header'>Profile</h1>
        <div className="profile-card">
            { user.photoURL && <img src={user.photoURL} alt="" />}
            {user.displayName && (<p><b>Name:</b> <span>{user.displayName}</span></p>) }
            {user.email && (<p><b>Email:</b> <span>{user.email}</span></p>) }
            
        </div>
    </div>
  )
}

export default Profile