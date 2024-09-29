"use client"
import CourseFormatter from '@/components/CourseFormatter';
import React, { useState } from 'react'

const Advising = () => {
  const [prompt, setPrompt] = useState('');
  const [ans, setAns] = useState('');

  const handleGenerate = async () => {
    try {
      // console.log("hi")
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: prompt })
      });

      const data = await response.json();
      if (response.ok) {
        setAns(data.output)
      } else {
        // console.error(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="max-w-xl mx-auto p-6 border border-gray-300 rounded-lg shadow-md bg-gray-50">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Advising</h1>
        <div className="flex justify-center items-center gap-2 mb-4">
            <input
                className="flex-grow px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                value={prompt}
                type="text"
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter a prompt lol.."
            />
            <button
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300"
                onClick={handleGenerate}
            >
                Click!
            </button>
        </div>
        {ans && (
            <div className="mt-4 p-4 border border-gray-300 rounded-md bg-blue-50 text-gray-800">
                {<CourseFormatter ans={ans} />}
            </div>
        )}
    </div>
);
}

export default Advising
