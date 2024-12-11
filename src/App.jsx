import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/auth/login.jsx";
import Signup from "./pages/auth/signup.jsx";
import ForgotPassword from "./pages/auth/forgot-password.jsx";


import Dashboard from "./pages/dashboard";
import Campaigns from "./pages/campaigns";
import CreateCampaign from "./pages/campaigns/create-campaign";

import Audience from "./pages/audience";
import AudienceAnalytics from "./pages/audience/analytics";
import CreateList from "./pages/audience/CreateList.jsx";
import AudienceSegments from "./pages/audience/segments";
import AudienceCreateSegments from "./pages/audience/segments/CreateSegments.jsx";


import Automation from "./pages/automation";
import AddServer from "./pages/automation/add-server.jsx";
import Account from "./pages/account";


import Autoresponder from "./pages/autoresponder";
import Templates from "./pages/templates";





function App() {
  return (
    <Router >
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />

        <Route path="/audience-lists" element={<Audience />} />
        <Route path="/audience-create-list" element={<CreateList />} />
        <Route path="/audience-segments" element={<AudienceSegments />} />
        <Route path="/audience-create-segments" element={<AudienceCreateSegments />} />

        <Route path="/audience-webforms" element={<Audience />} />
        <Route path="/audience-summary" element={<Audience />} />
        <Route path="/audience-analytics" element={<AudienceAnalytics />} />



        <Route path="/autoresponder" element={<Autoresponder />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/add-server/:type" element={<AddServer />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/account/:tab" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
