import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AddExperience from "./AddExperience";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Create a parent component to hold the shared state
function Main() {
  const [userId, setUserId] = useState("");

  return (
    <Routes>
      <Route path="/" element={<App userId={userId} setUserId={setUserId} />} />
      <Route
        path="/AddExperience"
        element={<AddExperience userId={userId} setUserId={setUserId} />}
      />
      <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
