import React, { useState } from "react";

function Education() {
  const [formData, setFormData] = useState({
    course: "",
    school: "",
    start_date: "",
    end_date: "",
    grade: "",
    logo: ""
  });

  const [responseId, setResponseId] = useState(null);
  const [error, setError] = useState("");

  // Updates form state when typing
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // Sends POST request to backend
  async function handleSubmit(e) {
    e.preventDefault();
    setError(""); // Reset error

    try {
      const res = await fetch("http://localhost:5000/resume/education", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error("Failed to submit education");

      const data = await res.json();
      setResponseId(data.id);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <h2>Add Education</h2>
      <form onSubmit={handleSubmit}>
        <input name="course" placeholder="Course" onChange={handleChange} required />
        <input name="school" placeholder="School" onChange={handleChange} required />
        <input name="start_date" placeholder="Start Date" onChange={handleChange} required />
        <input name="end_date" placeholder="End Date" onChange={handleChange} required />
        <input name="grade" placeholder="Grade" onChange={handleChange} required />
        <input name="logo" placeholder="Logo URL" onChange={handleChange} required />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {responseId !== null && (
        <p style={{ color: "green" }}>Education added! ID: {responseId}</p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Education;
