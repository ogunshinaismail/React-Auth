import React from 'react'
import '../../css/coursedetails.css'
import { useParams } from 'react-router-dom'
import { getCourse } from '../../courseData'

const CourseDetails = () => {
    let { subject } = useParams();
    const courses = getCourse(subject);
  return (
    <div className='course-details'>
        Course details - { subject }
        {console.log(courses)}
    </div>
  )
}

export default CourseDetails