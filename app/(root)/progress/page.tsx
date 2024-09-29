import { getRender } from '@/app/api/tasks/courses';
import FlowChart from '@/components/FlowChart'
import React from 'react'

const Progress = async () => {
  const courses = await getRender();
  // console.log(courses);
  return (
    <div className="flex flex-row">
      <FlowChart courses={courses} />
    </div>
  )
}

export default Progress

