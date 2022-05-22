import React from 'react'
import '../../css/courses.css'
import { getCourse } from '../../courseData'
import { Link } from 'react-router-dom';

const Courses = () => {
    const courses = getCourse();
    return (
        <div className='course'>
            <h1 className='course-header'>Courses</h1>
            <div className="course-card-container">
                {courses.map((course) => (
                    <div className="course-card">
                        <Link to={`/courses/${course.id}`}>
                            <p key={course.id}>{course.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Courses