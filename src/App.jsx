import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Campaigns from "./pages/campaigns";
import CreateCampaign from "./pages/campaigns/create-campaign";

import Audience from "./pages/audience";
import AudienceAnalytics from "./pages/audience/analytics";

import Automation from "./pages/automation";
import AddServer from "./pages/automation/add-server.jsx";
import Profile from "./pages/profile";


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

        <Route path="/audience-lists" element={<Audience />} />
        <Route path="/audience-segments" element={<Audience />} />
        <Route path="/audience-webforms" element={<Audience />} />
        <Route path="/audience-summary" element={<Audience />} />
        <Route path="/audience-analytics" element={<AudienceAnalytics />} />

        <Route path="/autoresponder" element={<Smtp />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/add-server/:type" element={<AddServer />} />
        <Route path="/templates" element={<SES />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
