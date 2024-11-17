import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Smtp from "./pages/smtp";
import SES from "./pages/ses";
import CreateSES from "./pages/ses/create-ses";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/smtp" element={<Smtp />} />
        <Route path="/ses" element={<SES />} />
        <Route path="/create-ses" element={<CreateSES />} />
        <Route path="/templates" element={<SES />} />
        <Route path="/contact" element={<SES />} />
        <Route path="/campaigns" element={<SES />} />
      </Routes>
    </Router>
  );
}

export default App;
