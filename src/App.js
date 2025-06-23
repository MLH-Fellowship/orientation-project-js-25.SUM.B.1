import "./App.css";
import DropZoneUploader from "./DropZoneUploader";

function App() {
  return (
    <div className="App">
      <h1>Resume Builder</h1>

      {/* Logo uploader section */}
      <div className="resumeSection">
        <h2>Upload Logo</h2>
        <DropZoneUploader />
        <br />
      </div>

      <div className="resumeSection">
        <h2>Experience</h2>
        <p>Experience Placeholder</p>
        <button>Add Experience</button>
        <br />
      </div>

      <div className="resumeSection">
        <h2>Education</h2>
        <p>Education Placeholder</p>
        <button>Add Education</button>
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
