"use server"
import { createCourse, getAllCourses } from "@/lib/actions/course.actions";
// import { handleError } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const nodes = [{ id: '1', position: { x: 150, y: 150 }, data: { label: 'ENGR 102 (2)'}, type: 'customNode' },
  { id: '2', position: { x: 150, y: 250 }, data: { label: 'MATH 151 (4)'}, type: 'customNode' },
  { id: '3', position: { x: 150, y: 335 }, data: { label: 'CHEM 107+117 (4)'}, type: 'customNode' },
  { id: '4', position: { x: 150, y: 450 }, data: { label: 'ENGL 104 (3)'}, type: 'customNode' },
  { id: '5', position: { x: 150, y: 550 }, data: { label: 'UCC (3)'}, type: 'customNode' },
  { id: '6', position: { x: 450, y: 150 }, data: { label: 'ENGR 216 (2)', }, type: 'customNode' },
  { id: '7', position: { x: 450, y: 250 }, data: { label: 'MATH 152 (4)', }, type: 'customNode' },
  { id: '8', position: { x: 450, y: 320 }, data: { label: 'PHYS 206 (3)', }, type: 'customNode' },
  { id: '9', position: { x: 450, y: 450 }, data: { label: 'ENGL 210 (3)', }, type: 'customNode' },
  { id: '10', position: { x: 450, y: 650 }, data: { label: 'UCC (3)', }, type: 'customNode' },
  { id: '11', position: { x: 750, y: 150 }, data: { label: 'CSCE 121 (4)', }, type: 'customNode' },
  { id: '12', position: { x: 750, y: 250 }, data: { label: 'CSCE 222 (3)', }, type: 'customNode' },
  { id: '13', position: { x: 750, y: 350 }, data: { label: 'MATH 304 (3)', }, type: 'customNode' },
  { id: '14', position: { x: 750, y: 450 }, data: { label: 'CSCE 181 (1)', }, type: 'customNode' },
  { id: '15', position: { x: 750, y: 550 }, data: { label: 'EAE (Science Elective) (4)', }, type: 'customNode' },
  { id: '16', position: { x: 750, y: 650 }, data: { label: 'EAE (General Elective) (1)', }, type: 'customNode' },
  { id: '17', position: { x: 1050, y: 150 }, data: { label: 'CSCE 221 (4)', }, type: 'customNode' },
  { id: '18', position: { x: 1050, y: 250 }, data: { label: 'CSCE 312 (4)', }, type: 'customNode' },
  { id: '19', position: { x: 1050, y: 350 }, data: { label: 'CSCE 314 (3)', }, type: 'customNode' },
  { id: '20', position: { x: 1050, y: 450 }, data: { label: 'EAE (Emphasis Area Elective) (3)', }, type: 'customNode' },
  { id: '21', position: { x: 1050, y: 550 }, data: { label: 'UCC (3)', }, type: 'customNode' },
  { id: '22', position: { x: 1250, y: 150 }, data: { label: 'CSCE 313 (4)', }, type: 'customNode' },
  { id: '23', position: { x: 1250, y: 250 }, data: { label: 'CSCE 315 (3)', }, type: 'customNode' },
  { id: '24', position: { x: 1250, y: 350 }, data: { label: 'CSCE 481 (1)', }, type: 'customNode' },
  { id: '25', position: { x: 1250, y: 450 }, data: { label: 'STAT 211 (3)', }, type: 'customNode' },
  { id: '26', position: { x: 1250, y: 550 }, data: { label: 'EAE (Emphasis Area Elective) (3)', }, type: 'customNode' },
  { id: '27', position: { x: 1250, y: 650 }, data: { label: 'UCC (3)', }, type: 'customNode' },
  { id: '28', position: { x: 1450, y: 150 }, data: { label: 'CSCE 411 (3)', }, type: 'customNode' },
  { id: '29', position: { x: 1450, y: 250 }, data: { label: 'EAE (CPSC Elective) (3)', }, type: 'customNode' },
  { id: '30', position: { x: 1450, y: 350 }, data: { label: 'EAE (CPSC Elective) (3)', }, type: 'customNode' },
  { id: '31', position: { x: 1450, y: 450 }, data: { label: 'MATH 251 (3)'}, type: 'customNode' },
  { id: '32', position: { x: 1450, y: 550 }, data: { label: 'EAE (Science Elective) (3)' }, type: 'customNode' },
  { id: '33', position: { x: 1450, y: 650 }, data: { label: 'CSCE 399 (0)' }, type: 'customNode' },
  { id: '34', position: { x: 1650, y: 150 }, data: { label: 'EAE (CPSC Elective) (3)' }, type: 'customNode' },
  { id: '35', position: { x: 1650, y: 250 }, data: { label: 'EAE (CPSC Elective) (3)' }, type: 'customNode' },
  { id: '36', position: { x: 1650, y: 350 }, data: { label: 'EAE (CPSC Elective) (3)' }, type: 'customNode' },
  { id: '37', position: { x: 1650, y: 450 }, data: { label: 'UCC (3)' }, type: 'customNode' },
  { id: '38', position: { x: 1650, y: 550 }, data: { label: 'EAE (Emphasis Area Elective) (3)' }, type: 'customNode' },
  { id: '39', position: { x: 1850, y: 150 }, data: { label: 'CSCE 482 (3)' }, type: 'customNode' },
  { id: '40', position: { x: 1850, y: 250 }, data: { label: 'EAE (CPSC Elective) (3)' }, type: 'customNode' },
  { id: '41', position: { x: 1850, y: 350 }, data: { label: 'UCC (3)' }, type: 'customNode' },
  { id: '42', position: { x: 1850, y: 450 }, data: { label: 'UCC (3)' }, type: 'customNode' },
  { id: '43', position: { x: 1850, y: 550 }, data: { label: 'EAE (Emphasis Area Elective) (3)' }, type: 'customNode' },];

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

export async function getRender() {
  
  const realCourses = await getCourses();
  const visited = new Array(realCourses.length); // Creates an empty array with a length of 5
  visited.fill(false);
  const ans = new Array(nodes.length);
  ans.fill("")
  for (let j = 0; j < nodes.length; j++) {
    const cor = nodes[j].data.label;
    let green = false;
    let yellow = false;
    for (let i = 0; i < realCourses.length; i++) {
      if (visited[i] === true)
        continue;
      if (realCourses[i].elective === true && cor.substring(0,3) === "EAE") {
        // console.log(data.realCourses[i])
        visited[i] = true;
        if (realCourses[i].planned === true) yellow = true;
        else green = true;
      }
      if (realCourses[i].ucc === true && cor.substring(0,3) === "UCC") {
        visited[i] = true;
        if (realCourses[i].planned === true) yellow = true;
        else green = true;
      }
      if (green || yellow)
        break;
      if (cor.substring(0,realCourses[i].department.length) == realCourses[i].department && cor.substring(realCourses[i].department.length+1, realCourses[i].department.length+4) == String(realCourses[i].code))
      {
        visited[i] = true;
        if (realCourses[i].planned === true) yellow = true;
        else green = true;
      }
    }
    if (yellow) ans[j] = "y";
    else if (green) ans[j] = "g";
  }
  return ans;
  
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
