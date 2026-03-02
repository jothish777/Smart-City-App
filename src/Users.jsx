import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Shield,
  Edit2,
  Trash2,
  Plus,
  Search,
  ChevronDown,
  Check,
  Lock,
  Mail,
  Phone,
} from "lucide-react";
import "./App.css";

function Users() {
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddUser, setShowAddUser] = useState(false);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Admin",
      email: "john@smartcity.gov",
      phone: "(555) 123-4567",
      role: "Admin",
      status: "Active",
      permissions: ["Manage Users", "View Reports", "Edit Services", "System Settings"],
      joinDate: "2024-01-15",
      color: "#667eea",
      bgColor: "#EEF2FF",
    },
    {
      id: 2,
      name: "Sarah Manager",
      email: "sarah@smartcity.gov",
      phone: "(555) 234-5678",
      role: "Manager",
      status: "Active",
      permissions: ["View Reports", "Edit Services", "Manage Issues"],
      joinDate: "2024-03-20",
      color: "#10b981",
      bgColor: "#F0FDF4",
    },
    {
      id: 3,
      name: "Mike Operator",
      email: "mike@smartcity.gov",
      phone: "(555) 345-6789",
      role: "Operator",
      status: "Active",
      permissions: ["Monitor Systems", "View Reports"],
      joinDate: "2024-05-10",
      color: "#06b6d4",
      bgColor: "#F0FDFA",
    },
    {
      id: 4,
      name: "Emma Viewer",
      email: "emma@smartcity.gov",
      phone: "(555) 456-7890",
      role: "Viewer",
      status: "Inactive",
      permissions: ["View Dashboard"],
      joinDate: "2024-06-01",
      color: "#f59e0b",
      bgColor: "#FFFBEB",
    },
  ]);

  const roles = [
    {
      name: "Admin",
      color: "#667eea",
      permissions: 15,
      description: "Full system access",
    },
    {
      name: "Manager",
      color: "#10b981",
      permissions: 12,
      description: "Manage operations",
    },
    {
      name: "Operator",
      color: "#06b6d4",
      permissions: 8,
      description: "Monitor systems",
    },
    {
      name: "Viewer",
      color: "#f59e0b",
      permissions: 3,
      description: "View only access",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="users-container">
      {/* HEADER */}
      <div className="users-header">
        <Link to="/admin" className="back-link-btn">
          ← Back to Admin Dashboard
        </Link>
      </div>

      <div className="users-hero">
        <h1>User Management</h1>
        <p>Control user access, permissions, and roles</p>
      </div>

      {/* MAIN CONTENT */}
      <div className="users-wrapper">
        {/* ROLES OVERVIEW */}
        <section className="users-section">
          <div className="section-header">
            <h2>User Roles</h2>
            <p>Manage permissions by role</p>
          </div>

          <div className="roles-grid">
            {roles.map((role, index) => (
              <div
                key={index}
                className="role-card"
                style={{ borderLeftColor: role.color }}
              >
                <div
                  className="role-badge"
                  style={{ backgroundColor: role.color }}
                >
                  {role.name[0]}
                </div>
                <h3>{role.name}</h3>
                <p className="role-description">{role.description}</p>
                <p className="role-permissions">
                  <Shield size={14} /> {role.permissions} Permissions
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* USERS MANAGEMENT */}
        <section className="users-section">
          <div className="users-section-header">
            <div>
              <h2>Users</h2>
              <p>Manage system users and access</p>
            </div>
            <button
              className="add-user-btn"
              onClick={() => setShowAddUser(!showAddUser)}
            >
              <Plus size={18} /> Add User
            </button>
          </div>

          {/* SEARCH BAR */}
          <div className="search-wrapper">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* USERS LIST */}
          <div className="users-list">
            {filteredUsers.length === 0 ? (
              <div className="no-results">
                <Users size={40} />
                <p>No users found</p>
              </div>
            ) : (
              filteredUsers.map((user) => {
                const isExpanded = expandedId === user.id;

                return (
                  <div
                    key={user.id}
                    className={`user-card ${isExpanded ? "expanded" : ""}`}
                    style={{ borderLeftColor: user.color }}
                  >
                    {/* USER HEADER */}
                    <div
                      className="user-card-header"
                      onClick={() =>
                        setExpandedId(isExpanded ? null : user.id)
                      }
                    >
                      <div
                        className="user-avatar"
                        style={{ backgroundColor: user.bgColor }}
                      >
                        <span style={{ color: user.color, fontWeight: "bold" }}>
                          {user.name.charAt(0)}
                        </span>
                      </div>

                      <div className="user-basic-info">
                        <h3>{user.name}</h3>
                        <div className="user-meta">
                          <span className="role-badge-small" style={{ backgroundColor: user.color }}>
                            {user.role}
                          </span>
                          <span
                            className={`status-badge-small ${
                              user.status === "Active" ? "active" : "inactive"
                            }`}
                          >
                            {user.status}
                          </span>
                        </div>
                      </div>

                      <ChevronDown
                        size={20}
                        className={`expand-icon ${isExpanded ? "rotated" : ""}`}
                      />
                    </div>

                    {/* USER DETAILS */}
                    {isExpanded && (
                      <div className="user-card-details">
                        <div className="user-detail-row">
                          <Mail size={16} />
                          <span>{user.email}</span>
                        </div>
                        <div className="user-detail-row">
                          <Phone size={16} />
                          <span>{user.phone}</span>
                        </div>
                        <div className="user-detail-row">
                          <Lock size={16} />
                          <span>Role: {user.role}</span>
                        </div>

                        <div className="user-permissions">
                          <h4>Permissions</h4>
                          <div className="permissions-list">
                            {user.permissions.map((perm, idx) => (
                              <div key={idx} className="permission-item">
                                <Check size={14} /> {perm}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="user-actions">
                          <button className="edit-btn">
                            <Edit2 size={16} /> Edit User
                          </button>
                          <button
                            className="delete-btn"
                            onClick={() => handleDeleteUser(user.id)}
                          >
                            <Trash2 size={16} /> Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Users;
