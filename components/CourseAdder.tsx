"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useTransition } from 'react';
import { sendCourse } from '@/app/api/tasks/courses';
import { useRouter } from 'next/navigation';

// Fields
type FormFields = {
  name: string,
  elective: boolean,
  ucc: boolean,
  department: string,
  code: number,
  taken: boolean,
  planned: boolean,
  transferred: boolean,
  grade: string,
  hours: number
}

const CourseAdder = () => {
  const { register, handleSubmit } = useForm<FormFields>();
  const [planned, setPlanned] = useState(false);
  const [transferred, setTransferred] = useState(false);
  const [taken, setTaken] = useState(false);

  const router = useRouter();
  const [, startTransition] = useTransition();

  const onSubmit: SubmitHandler<FormFields> = (data: any) => { //eslint-disable-line @typescript-eslint/no-explicit-any
    sendCourse(
      String(data.name),
      Boolean(data.elective),
      Boolean(data.ucc),
      String(data.department),
      Number(data.code),
      Boolean(data.taken),
      Boolean(data.planned),
      Boolean(data.transferred),
      String(data.grade),
      Number(data.hours)
    );

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-4">Course Adder!</h1>
      <form className="flex flex-col w-80 p-6 border border-gray-300 rounded-lg shadow-md" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          className="input border border-gray-300 p-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Course Name"
        />
        <input
          {...register("department")}
          className="input border border-gray-300 p-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Department"
        />
        <input
          {...register("code")}
          type="number"
          className="input border border-gray-300 p-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Code"
        />
        <label className="flex items-center mb-3">
          <input
            {...register("elective")}
            type="checkbox"
            className="mr-2"
          />
          CSCE Elective
        </label>
        <label className="flex items-center mb-3">
          <input
            {...register("ucc")}
            type="checkbox"
            className="mr-2"
          />
          UCC
        </label>
        {!taken && (
          <label className="flex items-center mb-3">
            <input
              {...register("planned")}
              type="checkbox"
              className="mr-2"
              onChange={(e) => setPlanned(e.target.checked)}
            />
            Planned
          </label>
        )}
        {!planned && (
          <label className="flex items-center mb-3">
            <input
              {...register("taken")}
              type="checkbox"
              className="mr-2"
              onChange={(e) => setTaken(e.target.checked)}
            />
            Taken
          </label>
        )}
        {taken && (
          <label className="flex items-center mb-3">
            <input
              {...register("transferred")}
              type="checkbox"
              className="mr-2"
              onChange={(e) => setTransferred(e.target.checked)}
            />
            Transferred
          </label>
        )}
        {/* Render grade input conditionally */}
        {!planned && taken && !transferred && (
          <input
            {...register("grade")}
            type="text"
            className="input border border-gray-300 p-2 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-dark"
            placeholder="Grade"
          />
        )}
        <input
          {...register("hours")}
          type="number"
          className="input border border-gray-300 p-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-maroon-dark"
          placeholder="Hours"
        />
        <button
          type="submit"
          className="bg-maroon-dark text-white font-semibold py-2 rounded-md hover:bg-maroon transition duration-200"
        >
          Submit!
        </button>
      </form>
    </div>
  );
}

export default CourseAdder;
