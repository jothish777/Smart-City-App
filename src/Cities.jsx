import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Cities() {

  const [locations, setLocations] = useState([
    {
      name: "City Hall",
      address: "123 Main Street, Downtown",
      category: "Government",
      description: "Main administrative building for city government operations",
      contact: "(555) 123-4567",
      status: "Active"
    },
    {
      name: "Central Park",
      address: "456 Park Avenue",
      category: "Recreation",
      description: "Large urban park with walking trails and playgrounds",
      contact: "(555) 234-5678",
      status: "Active"
    },
    {
      name: "Public Library",
      address: "789 Library Lane",
      category: "Education",
      description: "Main public library with extensive book collection",
      contact: "(555) 345-6789",
      status: "Active"
    }
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newLocation, setNewLocation] = useState({
    name: "",
    address: "",
    category: "",
    description: "",
    contact: "",
    status: "Active"
  });

  const handleChange = (e) => {
    setNewLocation({
      ...newLocation,
      [e.target.name]: e.target.value
    });
  };

  const handleAddLocation = () => {
    if (!newLocation.name || !newLocation.address) {
      alert("Please fill required fields");
      return;
    }

    setLocations([...locations, newLocation]);

    setNewLocation({
      name: "",
      address: "",
      category: "",
      description: "",
      contact: "",
      status: "Active"
    });

    setShowForm(false);
  };

  return (
    <div className="city-page">

      <div className="city-header">
        <div>
          <h2>City Information Management</h2>
          <p>Manage city locations and amenities</p>
        </div>

        <Link to="/admin">
          <button className="back-btn">Back to Dashboard</button>
        </Link>
      </div>

      <div className="city-topbar">
        <h3>All City Locations ({locations.length})</h3>
        <button className="admin-btn" onClick={() => setShowForm(true)}>
          Add Location
        </button>
      </div>

      {/* ADD FORM */}
      {showForm && (
        <div className="location-card">
          <h3>Add New Location</h3>

          <input name="name" placeholder="Location Name" value={newLocation.name} onChange={handleChange} />
          <input name="address" placeholder="Address" value={newLocation.address} onChange={handleChange} />
          <input name="category" placeholder="Category" value={newLocation.category} onChange={handleChange} />
          <input name="contact" placeholder="Contact" value={newLocation.contact} onChange={handleChange} />
          <textarea name="description" placeholder="Description" value={newLocation.description} onChange={handleChange}></textarea>

          <button className="admin-btn" onClick={handleAddLocation}>
            Save Location
          </button>
        </div>
      )}

      {/* DISPLAY LOCATIONS */}
      {locations.map((loc, index) => (
        <div key={index} className="location-card">
          <h3>{loc.name}</h3>
          <p>{loc.address}</p>
          <span className="status active">{loc.status}</span>

          <p><strong>Category:</strong> {loc.category}</p>
          <p>{loc.description}</p>
          <p><strong>Contact:</strong> {loc.contact}</p>
        </div>
      ))}

    </div>
  );
}

export default Cities;