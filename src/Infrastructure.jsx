import React from "react";
import { useNavigate } from "react-router-dom";

function Infrastructure() {
  const navigate = useNavigate();

  const infrastructureData = [
    {
      name: "Main Street Bridge",
      location: "Bridge • Main Street over River Park",
      status: "Good",
      lastInspection: "2025-12-15",
      nextInspection: "2026-06-15",
      type: "Bridge",
      notes: "Minor concrete repairs needed on east side",
    },
    {
      name: "Downtown Water Tower",
      location: "Water Infrastructure • Downtown District",
      status: "Excellent",
      lastInspection: "2026-01-10",
      nextInspection: "2026-07-10",
      type: "Water Infrastructure",
      notes: "All systems functioning properly",
    },
    {
      name: "Highway 45 Overpass",
      location: "Bridge • Highway 45 & Oak Street",
      status: "Fair",
      lastInspection: "2025-11-20",
      nextInspection: "2026-05-20",
      type: "Bridge",
      notes: "Surface cracks detected, monitoring required",
    },
    {
      name: "Central Power Substation",
      location: "Electrical • Industrial District",
      status: "Good",
      lastInspection: "2026-02-01",
      nextInspection: "2026-08-01",
      type: "Electrical",
      notes: "Equipment upgrade scheduled for Q3",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Excellent":
        return "#28a745";
      case "Good":
        return "#17a2b8";
      case "Fair":
        return "#ffc107";
      case "Poor":
        return "#dc3545";
      default:
        return "#6c757d";
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Infrastructure Monitoring</h1>
        <p style={styles.subheading}>
          Monitor and track infrastructure status
        </p>

        <button
          style={styles.backBtn}
          onClick={() => navigate("/dashboard")}
        >
          ← Back to Dashboard
        </button>

        {/* Status Summary */}
        <div style={styles.summary}>
          <div>Excellent: 1</div>
          <div>Good: 2</div>
          <div>Fair: 1</div>
          <div>Poor: 0</div>
        </div>

        <h3>All Infrastructure (4)</h3>

        {infrastructureData.map((item, index) => (
          <div key={index} style={styles.itemCard}>
            <h3>{item.name}</h3>
            <p><strong>{item.location}</strong></p>

            <span
              style={{
                ...styles.status,
                backgroundColor: getStatusColor(item.status),
              }}
            >
              {item.status}
            </span>

            <p><strong>Last Inspection:</strong> {item.lastInspection}</p>
            <p><strong>Next Inspection:</strong> {item.nextInspection}</p>
            <p><strong>Type:</strong> {item.type}</p>
            <p><strong>Notes:</strong> {item.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f4f6f9",
  },
  card: {
    width: "85%",
    maxWidth: "1000px",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
  },
  subheading: {
    textAlign: "center",
    color: "gray",
    marginBottom: "20px",
  },
  backBtn: {
    marginBottom: "20px",
    padding: "8px 14px",
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  summary: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#eef2f7",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  itemCard: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "15px",
    backgroundColor: "#fafafa",
  },
  status: {
    display: "inline-block",
    color: "white",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    margin: "5px 0",
  },
};

export default Infrastructure;