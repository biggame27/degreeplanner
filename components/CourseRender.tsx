"use client"

import { Button } from "./ui/button";
import { TiDeleteOutline } from "react-icons/ti";
import { deleteCourse } from "@/lib/actions/course.actions";
import { useRouter } from "next/navigation";

const gradeToGPA = (grade: string): number => {
  switch (grade.toUpperCase()) {
    case "A": return 4.0;
    case "B": return 3.0;
    case "C": return 2.0;
    case "D": return 1.0;
    default: return 0.0; // In case of invalid grade or N/A
  }
};

const calculateAverageGPA = (courses: any[]): number => { //eslint-disable-line @typescript-eslint/no-explicit-any
  // Filter courses that are taken and have a valid grade
  const gradedCourses = courses.filter((course) => course.taken && course.grade);

  if (gradedCourses.length === 0) {
    return 0;
  }
  let totalGPAHours = 0;
  let totalHours = 0;

  gradedCourses.forEach((course) => {
    const gpa = gradeToGPA(course.grade);
    const hours = course.hours;
    totalGPAHours += gpa * hours;
    totalHours += hours;
  });

  // Calculate weighted GPA
  return totalGPAHours / totalHours;
};

const courseRender = (course: any) => { //eslint-disable-line @typescript-eslint/no-explicit-any
  return (
    <div className="flex flex-row justify-center items-center border-t">
      {/* Course Name */}
      <div className="w-36 p-2 border-r">{course.name}</div>
      <div className="w-36 p-2 border-r">{course.department}</div>
      <div className="w-20 p-2 border-r">{course.code}</div>
      <div className="w-36 p-2 border-r">
        {course.planned ? 'Planned' : course.taken ? 'Taken' : course.transferred ? 'Transferred' : ''}
      </div>

      {/* Grade (only if course is taken) */}
      <div className="w-36 p-2 border-r">
        {course.taken ? course.grade || 'N/A' : 'N/A'}
      </div>
      <div className="w-20 p-2 border-r">{course.hours}</div>
      
    </div>
  )
    
}


const CourseRender = ({courses} : {courses:any}) => { //eslint-disable-line @typescript-eslint/no-explicit-any

  const router = useRouter();
  const averageGPA = calculateAverageGPA(courses);

  const handleSubmit = async (e: any, taskId: string) => { //eslint-disable-line @typescript-eslint/no-explicit-any
    e.preventDefault();
    await deleteCourse(taskId);
    router.refresh();

  }
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row justify-center items-center border-t pr-9">
        {/* Course Name */}
        <div className="w-36 p-2 border-r">Name</div>
        <div className="w-36 p-2 border-r">Department</div>
        <div className="w-20 p-2 border-r">Code</div>
        <div className="w-36 p-2 border-r">
          Status
        </div>
        <div className="w-36 p-2 border-r">
          grade
        </div>
        <div className="w-20 p-2 border-r">Hours</div>
      </div>
      {courses &&  courses.map((course : any) => ( //eslint-disable-line @typescript-eslint/no-explicit-any
        // onSubmit={(event) => handleSubmit(event, task._id)}
        <form key={course._id} className="flex flex-row justify-center items-center" onSubmit={(event) => handleSubmit(event, course._id)} >
          {courseRender(course)}
          <Button type="submit"  variant="outline" size="icon" className="bg-red-500 hover:bg-red-600 h-5/6">
            <TiDeleteOutline size={28} />
          </Button>
        </form>
      ))}
      <h1 className="flex justify-center text-3xl">
        Average GPA: {averageGPA}
      </h1>
    </div>
  )
}

export default CourseRender;