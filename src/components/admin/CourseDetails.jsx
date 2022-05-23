import React, { useEffect, useState } from 'react'
import '../../css/coursedetails.css'
import { useParams } from 'react-router-dom'
import { getCourse } from '../../courseData'

const CourseDetails = () => {
  const { subject } = useParams();
  const courses = getCourse();
  const [courseId, setCourseId] = useState({});
  const [intro, setIntro] = useState('');
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    let array = courses
    const courseId = array.find((e) => e.name === subject);
    const intro = courseId.details.intro
    const branches = courseId.details.branches.map(branch => (<li key={branch}>{branch}</li>))
    setIntro(intro);
    setBranches(branches);
    setCourseId(courseId);
  }, [courses, subject]);
  return (
    <div className='course-details'>
      <div className="course-details-header">
        <h1>Course Overview</h1>
      </div>
      <div className="course-details-body">
        <h1>{courseId.name}</h1>
        <h4>INTRODUCTION</h4>
        <p>{intro}</p>
        <h4>BRANCHES</h4>
        <ul>{branches}</ul>
      </div>
    </div>
  )
}

export default CourseDetails