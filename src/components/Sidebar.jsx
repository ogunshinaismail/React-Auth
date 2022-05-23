import React from 'react'
import '../css/sidebar.css'
import { Link } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'

const Sidebar = () => {
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
    <div className='sidebar'>
        <h1 className='sidebar-logo'>KODE<span className='logo-pink'>CAMP</span></h1>
        <ul>
            <li><Link to='/admin/dashboard'>Dashboard</Link></li>
            <li><Link to='/admin/courses'>Courses</Link></li>
            <li><Link to='/admin/profile'>Profile</Link></li>
            <li onClick={handleLogout}>Log Out</li>
        </ul>
    </div>
  )
}

export default Sidebar