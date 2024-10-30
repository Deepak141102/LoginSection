import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./Welcome";
import Form from "./components/Form";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/welcome" element={<WelcomePage />} />
    </Routes>
  </Router>
);

export default AppRouter;
