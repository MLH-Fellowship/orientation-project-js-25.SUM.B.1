import React from "react";

function Education() {
  const educationData = [
    {
      school: "CUNY SPS",
      course: "Data Science",
      start_date: "2025",
      end_date: "2026",
      grade: "90%",
    },
    {
      school: "LaGuardia CUNY",
      course: "Programming and Software Development",
      start_date: "2023",
      end_date: "2024",
      grade: "85%",
    },
  ];

  return (
    <div>
      <h2>Education</h2>
      <ul>
        {educationData.map((edu, index) => (
          <li key={index}>
            <strong>{edu.course}</strong> at {edu.school}<br />
            {edu.start_date} – {edu.end_date}<br />
            Grade: {edu.grade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
