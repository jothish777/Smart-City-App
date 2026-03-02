import { Link } from "react-router-dom";
import {
  MapPin,
  Wrench,
  AlertCircle,
  MessageSquare,
  Building2,
  Users,
  BarChart3,
  Clock,
  CheckCircle,
  TrendingUp,
  Activity,
  Settings,
  LogOut,
} from "lucide-react";
import "./App.css";

function AdminDashboard() {
  const stats = [
    {
      title: "City Locations",
      value: "3",
      subtitle: "Active locations",
      icon: MapPin,
      color: "#667eea",
      bgColor: "#EEF2FF",
    },
    {
      title: "Public Services",
      value: "6",
      subtitle: "Total services",
      icon: Wrench,
      color: "#10b981",
      bgColor: "#F0FDF4",
    },
    {
      title: "Open Issues",
      value: "12",
      subtitle: "Pending resolution",
      icon: AlertCircle,
      color: "#f87171",
      bgColor: "#FEF2F2",
    },
    {
      title: "New Feedback",
      value: "8",
      subtitle: "From citizens",
      icon: MessageSquare,
      color: "#f59e0b",
      bgColor: "#FFFBEB",
    },
  ];

  const recentActivity = [
    {
      action: "Issue Reported",
      description: "Pothole on Main Street",
      time: "2 hours ago",
      status: "open",
      icon: AlertCircle,
    },
    {
      action: "Service Updated",
      description: "Public Transportation Status Changed",
      time: "4 hours ago",
      status: "completed",
      icon: CheckCircle,
    },
    {
      action: "Citizen Feedback",
      description: "New complaint about waste management",
      time: "1 day ago",
      status: "pending",
      icon: MessageSquare,
    },
    {
      action: "Infrastructure Alert",
      description: "Water pressure fluctuation detected",
      time: "2 days ago",
      status: "resolved",
      icon: Activity,
    },
  ];

  const managementSections = [
    {
      title: "City Information",
      description: "Manage locations, details, and services",
      icon: Building2,
      color: "#667eea",
      link: "/cities",
      action: "Manage",
    },
    {
      title: "Public Services",
      description: "View and update all city services",
      icon: Wrench,
      color: "#10b981",
      link: "/services",
      action: "Manage",
    },
    {
      title: "Infrastructure",
      description: "Monitor and manage city infrastructure",
      icon: Building2,
      color: "#06b6d4",
      link: "/infrastructure",
      action: "Monitor",
    },
    {
      title: "Users & Permissions",
      description: "Control user access and roles",
      icon: Users,
      color: "#8b5cf6",
      link: "#",
      action: "Settings",
    },
  ];

  return (
    <div className="admin-dashboard">
      {/* HEADER */}
      <div className="admin-header">
        <div className="admin-header-left">
          <h1>Admin Dashboard</h1>
          <p>Welcome back, Administrator</p>
        </div>
        <div className="admin-header-right">
          <button className="admin-header-icon-btn">
            <Settings size={20} />
          </button>
          <button className="admin-header-icon-btn logout">
            <LogOut size={20} />
          </button>
          <Link to="/">
            <button className="admin-back-btn">← Home</button>
          </Link>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="admin-content">
        {/* STATISTICS SECTION */}
        <section className="admin-section">
          <div className="section-header">
            <h2>Overview</h2>
            <p>Key metrics and statistics</p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="stat-card-modern"
                  style={{
                    borderLeftColor: stat.color,
                  }}
                >
                  <div className="stat-icon-wrapper" style={{ backgroundColor: stat.bgColor }}>
                    <IconComponent size={28} color={stat.color} />
                  </div>
                  <div className="stat-content">
                    <p className="stat-title">{stat.title}</p>
                    <h3 className="stat-value">{stat.value}</h3>
                    <p className="stat-subtitle">{stat.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* TWO COLUMN LAYOUT */}
        <div className="admin-two-column">
          {/* RECENT ACTIVITY */}
          <section className="admin-section">
            <div className="section-header">
              <h2>Recent Activity</h2>
              <Link to="#" style={{ textDecoration: "none", color: "#667eea" }}>
                View All
              </Link>
            </div>

            <div className="activity-list">
              {recentActivity.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div key={index} className="activity-item">
                    <div
                      className="activity-icon"
                      style={{
                        backgroundColor:
                          activity.status === "open"
                            ? "#FEF2F2"
                            : activity.status === "completed"
                              ? "#F0FDF4"
                              : activity.status === "pending"
                                ? "#FFFBEB"
                                : "#F0F9FF",
                      }}
                    >
                      <IconComponent
                        size={20}
                        color={
                          activity.status === "open"
                            ? "#f87171"
                            : activity.status === "completed"
                              ? "#10b981"
                              : activity.status === "pending"
                                ? "#f59e0b"
                                : "#06b6d4"
                        }
                      />
                    </div>
                    <div className="activity-content">
                      <p className="activity-action">{activity.action}</p>
                      <p className="activity-description">{activity.description}</p>
                    </div>
                    <p className="activity-time">{activity.time}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* QUICK STATS */}
          <section className="admin-section">
            <div className="section-header">
              <h2>Quick Stats</h2>
            </div>

            <div className="quick-stat">
              <div className="quick-stat-icon" style={{ backgroundColor: "#EEF2FF" }}>
                <TrendingUp size={24} color="#667eea" />
              </div>
              <div>
                <p className="quick-stat-label">System Performance</p>
                <p className="quick-stat-value">98.5%</p>
              </div>
            </div>

            <div className="quick-stat">
              <div className="quick-stat-icon" style={{ backgroundColor: "#F0FDF4" }}>
                <Users size={24} color="#10b981" />
              </div>
              <div>
                <p className="quick-stat-label">Total Citizens</p>
                <p className="quick-stat-value">2,847</p>
              </div>
            </div>

            <div className="quick-stat">
              <div className="quick-stat-icon" style={{ backgroundColor: "#FEF2F2" }}>
                <AlertCircle size={24} color="#f87171" />
              </div>
              <div>
                <p className="quick-stat-label">Active Alert</p>
                <p className="quick-stat-value">Low</p>
              </div>
            </div>

            <div className="quick-stat">
              <div className="quick-stat-icon" style={{ backgroundColor: "#FFFBEB" }}>
                <Clock size={24} color="#f59e0b" />
              </div>
              <div>
                <p className="quick-stat-label">Average Response</p>
                <p className="quick-stat-value">2.4 hrs</p>
              </div>
            </div>
          </section>
        </div>

        {/* MANAGEMENT SECTIONS */}
        <section className="admin-section">
          <div className="section-header">
            <h2>Management</h2>
            <p>Control and manage city operations</p>
          </div>

          <div className="management-grid">
            {managementSections.map((section, index) => (
              <Link key={index} to={section.link} style={{ textDecoration: "none" }}>
                <div className="management-card">
                  <div
                    className="management-icon"
                    style={{ backgroundColor: section.color }}
                  >
                    <section.icon size={32} color="white" />
                  </div>
                  <h3>Check {section.title}</h3>
                  <p>{section.description}</p>
                  <button
                    className="management-btn"
                    style={{ borderColor: section.color, color: section.color }}
                  >
                    {section.action} →
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdminDashboard;