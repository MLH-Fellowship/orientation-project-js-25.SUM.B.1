import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import SkillForm from "./SkillForm";
import ExperienceForm from "./ExperienceForm";
import { Link } from "react-router-dom";
import AddExperience from "./AddExperience";
import LogoDropzone from "./LogoDropzone";
import html2pdf from "html2pdf.js";

function App({ userId, setUserId }) {
  const [editMode, setEditMode] = useState(false);
  const [skillEditMode, setSkillEditMode] = useState(false);
  const [experienceEditMode, setExperienceEditMode] = useState(false);
  const [showExperienceForm, setShowExperienceForm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [logoImage, setLogoImage] = useState(null);

  function editEduHandler(e) {
    e.preventDefault();
    setEditMode(true);
  }

  function editSkillHandler(e) {
    e.preventDefault();
    setSkillEditMode(true);
  }

  function editExpHandler(e) {
    e.preventDefault();
    setExperienceEditMode(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, linkedin, github }),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const exportPDF = () => {
    const element = document.getElementById("resume-content");
    html2pdf()
      .set({
        margin: 0.5,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  return (
    <div className="App">
      <h1>Resume Builder</h1>

      <form onSubmit={handleSubmit} className="userInfoSection">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone +1234567890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="LinkedIn URL"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
        <input
          type="text"
          placeholder="GitHub URL"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
        <button type="submit">Save Contact Info</button>
      </form>

      <LogoDropzone onImageUpload={(img) => setLogoImage(img)} />

      <div id="resume-content">
        <div className="pdfHeader">
          <div className="userInfoText">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <div className="links">
              {linkedin && <span>{linkedin}</span>}
              {linkedin && github && <span> | </span>}
              {github && <span>{github}</span>}
            </div>
          </div>
          {logoImage && (
            <img
              src={logoImage}
              alt="Uploaded Logo"
              className="uploaded-logo"
            />
          )}
        </div>

        <div className="resumeSection">
          <h2>Experience</h2>
          <p>Experience Placeholder</p>
          {showExperienceForm ? (
            <AddExperience onCancel={() => setShowExperienceForm(false)} />
          ) : (
            <button onClick={() => setShowExperienceForm(true)}>
              Add Experience
            </button>
          )}
        </div>

        <div className="resumeSection">
          <h2>Education</h2>
          <p>Education Placeholder</p>
          <button onClick={editEduHandler}>Add Education</button>
        </div>

        <div className="resumeSection">
          <h2>Skills</h2>
          <p>Skill Placeholder</p>
          <Link to="/addSkill">
            <button onClick={editSkillHandler}>Add Skill</button>
          </Link>
        </div>
      </div>

      <br />
      <button onClick={exportPDF}>Export as PDF</button>
    </div>
  );
}

export default App;
