// ====== USER PARAMS -> indicates what needs to be passed in parameter
declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};

declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

declare type CreateCourseParams = {
  courseId: string,
  clerkId: string;
  department: string;
  elective: boolean;
  ucc: boolean;
  code: number;
  name: string;
  planned: boolean;
  taken: boolean;
  transferred: boolean;
  grade: string;
  hours: number;
}


declare type UpdateCourseParams = {
  department: string;
  code: number;
  name: string;
  planned: boolean;
  taken: boolean;
  transferred: boolean;
  grade: string;
};