import React from 'react';

const CourseFormatter = ({ans}: {ans:string}) => {
  const text = ans;

  const sections = text.split('\n\n');

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      {sections.map((section, index) => {
        const lines = section.split('\n');
        const title = lines[0].replace(/\*\*(.*)\*\*/, '$1'); // Remove asterisks from titles

        return (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <ul className="list-disc list-inside pl-4">
              {lines.slice(1).map((line, i) => {
                // Handle course descriptions and avoid duplicates
                if (line.startsWith('* **')) {
                  return (
                    <li key={i}>
                      <span className="font-semibold">{line.replace(/^\*\s/, '')}</span>
                    </li>
                  );
                } else if (line.startsWith('* ')) {
                  return (
                    <li key={i}>
                      {line.replace(/^\*\s/, '')}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default CourseFormatter;
