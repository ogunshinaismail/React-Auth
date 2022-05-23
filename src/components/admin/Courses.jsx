import React from 'react'
import '../../css/courses.css'
import { getCourse } from '../../courseData'
import { Link } from 'react-router-dom';

const Courses = () => {
    const courses = getCourse(); 
    return (
        <div className='course'>
            <div className='course-header'>
                <h1>Courses</h1>
            </div>
            <div className="course-card-container">
                {courses.map((course) => (
                    <div className="course-card" key={course.id}>
                        <Link to={`/admin/courses/${course.name}`}>
                            <p>{course.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Courses