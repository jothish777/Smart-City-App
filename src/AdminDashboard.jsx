import { Link } from "react-router-dom";
import { MapPin, Wrench, AlertCircle, MessageSquare, Building2 } from "lucide-react";
import "./App.css";

function AdminDashboard() {
  return (
    <div className="dashboard-container">

      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <h2>Admin Dashboard</h2>
          <p>Smart City Management</p>
        </div>

        <Link to="/">
          <button className="back-btn">← Back to Home</button>
        </Link>
      </div>

      {/* TOP CARDS */}
      <div className="stats-container">
        <div className="stat-card">
          <MapPin />
          <h3>City Locations</h3>
          <h1>3</h1>
          <p>Total registered locations</p>
        </div>

        <div className="stat-card">
          <Wrench />
          <h3>Public Services</h3>
          <h1>4</h1>
          <p>Active services</p>
        </div>

        <div className="stat-card">
          <AlertCircle color="red" />
          <h3>Open Issues</h3>
          <h1>2</h1>
          <p>Require attention</p>
        </div>

        <div className="stat-card">
          <MessageSquare />
          <h3>New Feedback</h3>
          <h1>1</h1>
          <p>Pending review</p>
        </div>
      </div>

      {/* MANAGEMENT CARDS */}
      <div className="manage-container">
        <div className="manage-card">
          <Building2 color="#4f46e5" />
          <h3>City Information</h3>
          <p>Manage locations and amenities throughout the city</p>
          <Link to="/cities">
  <button className="admin-btn">Manage City Info</button>
</Link>
        </div>

        <div className="manage-card">
          <Wrench color="green" />
          <h3>Public Services</h3>
          <p>Update and maintain public service details</p>
          <button className="admin-btn">Manage Services</button>
        </div>

        <div className="manage-card">
          <Building2 color="blue" />
          <h3>Infrastructure</h3>
          <p>Monitor and track infrastructure status</p>
          <button className="admin-btn">Monitor Infrastructure</button>
        </div>
      </div>

    </div>
  );
}

export default AdminDashboard;