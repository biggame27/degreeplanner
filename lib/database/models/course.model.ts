import { Schema, model, models } from "mongoose";

const CourseSchema = new Schema({
  courseId: {
    type: String,
    required: true,
    unique: true,
  },
  clerkId: {
    type: String,
    required: true,
  },
  ucc: {
    type: Boolean
  },
  elective: {
    type: Boolean
  },
  department: {
    type: String,
  },
  code: {
    type: Number,
  },
  name: {
    type: String,
  },
  taken: {
    type: Boolean,
  },
  planned: {
    type: Boolean,
  },
  transferred: {
    type: Boolean,
  },
  grade: {
    type: String,
  },
  hours: {
    type: Number
  },
})

const Course = models?.Course || model("Course", CourseSchema);

export default Course;