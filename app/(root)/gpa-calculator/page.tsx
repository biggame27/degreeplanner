import { getCourses } from '@/app/api/tasks/route'
import CourseAdder from '@/components/CourseAdder'
import CourseRender from '@/components/CourseRender'
import React from 'react'

const GPACalc = async () => {
  const courses = await getCourses();
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-5">
      <CourseAdder />
      <CourseRender courses={courses} />
    </div>
    </>
  )
}

export default GPACalc
