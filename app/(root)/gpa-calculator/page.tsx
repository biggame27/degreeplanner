import { getCourses } from '@/app/api/tasks/courses'
import CourseAdder from '@/components/CourseAdder'
import CourseRender from '@/components/CourseRender'
import React from 'react'

const GPACalc = async () => {
  const courses = await getCourses();
  return (
    <>
    <div className="flex flex-row justify-center items-center gap-5">
      <CourseRender courses={courses} />
      <CourseAdder />
    </div>
    </>
  )
}

export default GPACalc
