"use server"
import { createCourse, getAllCourses } from "@/lib/actions/course.actions";
// import { handleError } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function checkUser() {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in')
  return userId;
}

export async function sendCourse(name: string, elective:boolean, ucc: boolean, department: string, code: number,  taken: boolean, planned: boolean, transferred: boolean, grade: string, hours: number) {
  try {
    const course = await {
      courseId: String(Date.now()),
      clerkId: await checkUser(),
      name: name,
      elective: elective,
      ucc: ucc,
      department: department,
      taken: taken,
      planned: planned,
      transferred: transferred,
      code: code,
      grade: grade,
      hours: hours,
    }
    const newCourse = await createCourse(course);
    return newCourse;
  } catch (error) {
    console.log(error);
  }
}

export async function getCourses() {
  try {
    const courses = await getAllCourses(await checkUser());
    return courses;
  } catch (error) {
    console.log(error);
  }
}

// export async function getTask2 (month: Number, year: Number) {
//   try{
//     const id = await checkUser();
//     const tasks = await getTasks(id, month, year);
//     return tasks
//   } catch (error) {
//     console.log('bruh1')
//   }
// }
