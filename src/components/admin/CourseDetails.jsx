import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
    let { id } = useParams();
  return (
    <div>Course details - { id }</div>
  )
}

export default CourseDetails