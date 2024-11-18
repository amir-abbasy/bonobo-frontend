import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Campaigns from "./pages/campaigns";
import CreateCampaign from "./pages/campaigns/create-campaign";

import Smtp from "./pages/smtp";
import SES from "./pages/ses";
import CreateSES from "./pages/ses/create-ses";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />

        <Route path="/autoresponder" element={<Smtp />} />
        <Route path="/automation" element={<SES />} />
        <Route path="/templates" element={<SES />} />
        <Route path="/contact" element={<SES />} />
      </Routes>
    </Router>
  );
}

export default App;
