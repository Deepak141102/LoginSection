// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./Welcome";
import Form from "./components/Form";
import WorkInProgress from "./components/Progress"; // Import WorkInProgress component

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/work-in-progress/:title" element={<WorkInProgress />} />
    </Routes>
  </Router>
);

export default AppRouter;
