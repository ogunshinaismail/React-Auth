import React from 'react'
import '../../css/dashboard.css'
import { useUserAuth } from '../../context/UserAuthContext'
import LoginSvg from '../../svg/login.svg'

const Dashboard = () => {
  const { user } = useUserAuth();

  return (
    <div className='dashboard'>
      <div className="welcome-info">
        <h1>Hello!</h1>
        <p>Welcome {user && user.displayName}</p>
      </div>
      <object data={LoginSvg} width="200" height="200"> </object>
    </div>

  )
}

export default Dashboard
// <p>Hello Welcome {user && user.email}</p>