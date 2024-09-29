import { checkUser } from '@/app/api/tasks/courses';
import FlowChart from '@/components/FlowChart'
import { getAllCourses } from '@/lib/actions/course.actions';
import React from 'react'

const Progress = async () => {
  const courses = await getAllCourses(await checkUser());
  return (
    <div className="flex flex-row">
      <FlowChart courses={courses} />
    </div>
  )
}

export default Progress

