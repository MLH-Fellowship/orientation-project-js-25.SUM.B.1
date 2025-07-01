import "./App.css";
import Education from "./Education";

function App() {
  return (
    <div className="App">
      <h1>Resume Builder</h1>

      <div className="resumeSection">
        <h2>Experience</h2>
        <p>Experience Placeholder</p>
        <button>Add Experience</button>
        <br />
      </div>

      <div className="resumeSection">
        <Education />
        <br />
      </div>

      <div className="resumeSection">
        <h2>Skills</h2>
        <p>Skill Placeholder</p>
        <button>Add Skill</button>
        <br />
      </div>

      <br />
      <button>Export</button>
    </div>
  );
}

export default App;
