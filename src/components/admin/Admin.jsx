import React from 'react'
import '../../css/admin.css'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../Sidebar'
import Dashboard from './Dashboard'
import Courses from './Courses'
import Profile from './Profile'
import CourseDetails from './CourseDetails'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar />

        <div className="main-content">
            <Routes>
                <Route path='dashboard' element={<Dashboard />}/>
            </Routes>
            <Routes>
                <Route path='courses/' element={<Courses />} />
                <Route path='courses/:subject' element={<CourseDetails />} />
            </Routes>
            <Routes>
                <Route path='profile' element={<Profile />}/>
            </Routes>
        </div>
    </div>
  )
}

export default Admin