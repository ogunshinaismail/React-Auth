import React from 'react'
import { useUserAuth } from '../../context/UserAuthContext'


const Dashboard = () => {
  let { user, logOut } = useUserAuth();

  const handleLogout = async () => {
    try{
      await logOut()
      console.log(user);
    }catch (err) {
      console.log(err.message);
    }
  }
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Hello Welcome {user && user.email}</p>
        <button onClick={handleLogout}>Log out</button>
        </div>
        
        )
      }
      
export default Dashboard
// <button onClick={handleLogout}>Log out</button>