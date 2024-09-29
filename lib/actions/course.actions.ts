"use server";

import Course from "../database/models/course.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import User from "../database/models/user.model";
import { getUserById } from "./user.actions";
import { revalidatePath } from "next/cache";

// CREATE
export async function createCourse(course: CreateCourseParams) {
  try {
    await connectToDatabase();

    const newCourse = await Course.create(course);

    return JSON.parse(JSON.stringify(newCourse));
  } catch (error) {
    handleError(error);
  }
}
//FIX
export async function getCourse(clerkId: string, department: string, code:number, name:string) {
  try {
    await connectToDatabase();
    const id = await getUserById(clerkId);
    const author = await User.findById(id);

    if (!author) {
      throw new Error("user not found");
    }
    const course = await Course.find({ "clerkId": clerkId, "department": department, "code": code, "name":name });
    
    return JSON.parse(JSON.stringify(course));
  } catch(error) {
    handleError(error);
  }
}

export async function getAllCourses(clerkId: string) {
  try {
    await connectToDatabase();
    const id = await getUserById(clerkId);
    const author = await User.findById(id);

    if (!author) {
      throw new Error("user not found");
    }
    const course = await Course.find({ "clerkId": clerkId });
    
    return JSON.parse(JSON.stringify(course));
  } catch(error) {
    handleError(error);
  }
}


// UPDATE
export async function updateCourse(clerkId: string, course: UpdateCourseParams) {
  try {
    await connectToDatabase();

    const updatedCourse = await Course.findOneAndUpdate({ clerkId }, course, {
      new: true,
    });

    if (!updatedCourse) throw new Error("User update failed");
    
    return JSON.parse(JSON.stringify(updatedCourse));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteCourse(courseId: string) {
  try {
    await connectToDatabase();

    // Find task to delete
    // const taskToDelete = await Task.findOne({ taskId });

    // if (!taskToDelete) {
    //   throw new Error("User not found");
    // }

    // Delete task
    const deletedCourse = await Course.findByIdAndDelete(courseId);
    revalidatePath("/");

    return deletedCourse ? JSON.parse(JSON.stringify(deletedCourse)) : null;
  } catch (error) {
    handleError(error);
  }
}