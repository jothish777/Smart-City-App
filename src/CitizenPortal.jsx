import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AlertCircle, MessageSquare, Home, MapPin, Phone } from "lucide-react";
import "./App.css";

function CitizenPortal() {
  const [citzenName, setCitizenName] = useState("");
  const [email, setEmail] = useState("");
  const [issueType, setIssueType] = useState("general");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmitIssue = () => {
    if (citzenName && email && description) {
      alert(
        `Issue Reported Successfully!\nTicket ID: #${Math.floor(Math.random() * 10000)}`
      );
      setCitizenName("");
      setEmail("");
      setDescription("");
      setIssueType("general");
      setSubmitted(true);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="main-container">
      {/* TOP BAR WITH LOGOUT */}
      <div className="top-bar">
        <Link to="/">
          <button className="logout-btn">← Back to Home</button>
        </Link>
      </div>

      {/* HEADER */}
      <div className="header">
        <Home size={50} color="green" />
        <h1>Citizen Portal</h1>
        <p>Report issues, access city services, and stay informed</p>
      </div>

      <div className="citizen-container">
        {/* CITY INFORMATION SECTION */}
        <div className="info-section">
          <h2>📍 City Information</h2>
          <div className="info-card">
            <h3>Current Weather</h3>
            <p>Temperature: 28°C | Status: Sunny</p>
          </div>
          <div className="info-card">
            <h3>Active Services</h3>
            <p>✓ Water Supply | ✓ Electricity | ✓ Waste Management</p>
          </div>
          <div className="info-card">
            <h3>Emergency Numbers</h3>
            <p>
              <Phone size={16} /> Police: 100 | Fire: 101 | Ambulance: 102
            </p>
          </div>
        </div>

        {/* ISSUE REPORTING SECTION */}
        <div className="form-section">
          <h2>
            <AlertCircle size={24} /> Report an Issue
          </h2>

          {submitted && (
            <div className="success-message">
              ✓ Thank you for reporting! Our team will review your issue shortly.
            </div>
          )}

          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={citzenName}
              onChange={(e) => setCitizenName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Issue Type</label>
            <select
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
            >
              <option value="general">General</option>
              <option value="pothole">Pothole/Road Damage</option>
              <option value="streetlight">Street Light</option>
              <option value="water">Water Supply</option>
              <option value="garbage">Garbage Collection</option>
              <option value="pollution">Pollution</option>
              <option value="safety">Safety Issue</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Describe the issue in detail..."
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button className="citizen-btn" onClick={handleSubmitIssue}>
            <MessageSquare size={18} /> Submit Report
          </button>
        </div>

        {/* QUICK LINKS SECTION */}
        <div className="quick-links">
          <h2>🔗 Quick Links</h2>
          <Link to="/services">
            <button className="link-btn">Available Services</button>
          </Link>
          <Link to="/infrastructure">
            <button className="link-btn">Infrastructure Status</button>
          </Link>
          <Link to="/cities">
            <button className="link-btn">City Information</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CitizenPortal;
