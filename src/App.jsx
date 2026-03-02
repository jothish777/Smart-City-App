import "./App.css";
import { ShieldCheck, User, Building2 } from "lucide-react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import AdminDashboard from "./AdminDashboard";
import Cities from "./Cities";
import Services from "./Services";
import Infrastructure from "./Infrastructure";
import CitizenPortal from "./CitizenPortal";

function Home() {
  return (
    <div className="main-container">

      {/* TOP RIGHT LOGIN BUTTON */}
      <div className="top-bar">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </div>

      <div className="header">
        <Building2 size={50} color="#4f46e5" />
        <h1>Smart City Management</h1>
        <p>
          A comprehensive platform to manage and access essential city
          information, services, and infrastructure
        </p>
      </div>

      <div className="card-container">

        <div className="card">
          <ShieldCheck size={50} color="#4f46e5" />
          <h2>Admin Portal</h2>
          <p>
            Manage city information, update services, and monitor infrastructure
          </p>
          <Link to="/admin">
  <button className="admin-btn">Enter Admin Dashboard</button>
</Link>
        </div>

        <div className="card">
          <User size={50} color="green" />
          <h2>Citizen Portal</h2>
          <p>
            Access city details, report issues, and provide feedback
          </p>
          <Link to="/citizen">
            <button className="citizen-btn">Enter Citizen Portal</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/citizen" element={<CitizenPortal />} />
      <Route path="/cities" element={<Cities />} />
      <Route path="/services" element={<Services />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
    </Routes>
  );
}

export default App;