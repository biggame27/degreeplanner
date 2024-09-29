"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useTransition } from 'react';
import { sendCourse } from '@/app/api/tasks/route';
import { useRouter } from 'next/navigation';

// fields
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
  // register is fields, handleSubmit makes it to where page doesn't refresh
  const { register, handleSubmit } = useForm<FormFields>();
  const [planned, setPlanned] = useState(false)
  const [transferred, setTransferred] = useState(false)
  const [taken, setTaken] = useState(false)

  const router = useRouter();
  const [, startTransition] = useTransition(); ////eslint-disable-line @typescript-eslint/no-unused-vars

  const onSubmit: SubmitHandler<FormFields> = (data:any) => { //eslint-disable-line @typescript-eslint/no-explicit-any
    sendCourse(String(data.name), Boolean(data.elective), Boolean(data.ucc), String(data.department), Number(data.code), Boolean(data.taken), Boolean(data.planned), Boolean(data.transferred), String(data.grade), Number(data.hours))
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  }

  return (
    <div>
      <form  className="form flex flex-col w-72" onSubmit={handleSubmit(onSubmit)}>
        {/* onChange={(e:any) => setName(e.target.value)} */}
        <input {...register("name")} className="input border-2 my-2" placeholder="course name" />
        <input {...register("department")} className="input border-2 my-2" placeholder="department" />
        <input {...register("code")} type="number" className="input border-2 my-2" placeholder="code" />
        <label>
          <input
            {...register("elective")}
            type="checkbox"
            className="input border-2 my-2"
          />
          CSCE Elective
        </label>
        <label>
          <input
            {...register("ucc")}
            type="checkbox"
            className="input border-2 my-2"
          />
          UCC
        </label>
      {!taken && <label>
        <input
          {...register("planned")}
          type="checkbox"
          className="input border-2 my-2"
          onChange={(e) => setPlanned(e.target.checked)} // Use e.target.checked for boolean
        />
        Planned
      </label> }
      
      {!planned && (
        <label>
          <input
            {...register("taken")}
            type="checkbox"
            className="input border-2 my-2"
            onChange={(e) => setTaken(e.target.checked)} // Use e.target.checked for boolean
          />
          Taken
        </label>
      )}
      
      {taken && (
        <label>
          <input
            {...register("transferred")}
            type="checkbox"
            className="input border-2 my-2"
            onChange={(e) => setTransferred(e.target.checked)} // Use e.target.checked for boolean
          />
          Transferred
        </label>
      )}
      
      {/* Render grade input conditionally */}
      {!planned && taken && !transferred && (
        <input
          {...register("grade")}
          type="text" // Use type="text" instead of type="string"
          className="input border-2 my-2"
          placeholder="grade"
        />
      )}
      <input {...register("hours")} type="number" className="input border-2 my-2" placeholder="hours" />
        
        
        <button type="submit" className="border-2">submit!</button>
      </form>
    </div>
  )
}

export default CourseAdder;