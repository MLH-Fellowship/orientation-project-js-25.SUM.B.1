import React, { useState } from "react";
import "./App.css";
import AddExperience from "./AddExperience";
import LogoDropzone from "./LogoDropzone";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [showExperienceForm, setShowExperienceForm] = useState(false);

  return (
    <div className="App">
      <h1>Resume Builder</h1>

      <div className="userInfoSection">
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
          placeholder="Phone"
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
      </div>

      <div className="resumeSection">
        <h2>Upload Logo</h2>
        <LogoDropzone />
      </div>

      <div className="resumeSection">
        <div className="userInfoDisplay">
          <h2>{name}</h2>
          {(email || phone || linkedin || github) && (
            <p>
              {email && <span>{email}</span>}
              {phone && <span> | {phone}</span>}
              {linkedin && <span> | {linkedin}</span>}
              {github && <span> | {github}</span>}
            </p>
          )}
        </div>
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
        <button>Add Education</button>
      </div>

      <div className="resumeSection">
        <h2>Skills</h2>
        <p>Skill Placeholder</p>
        <button>Add Skill</button>
      </div>

      <button>Export</button>
    </div>
  );
}

export default App;
