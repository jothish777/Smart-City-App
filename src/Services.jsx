import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Heart,
  Ambulance,
  Bus,
  Trash2,
  Droplet,
  Zap,
  Building2,
  Phone,
  Clock,
  MapPin,
  ChevronRight,
} from "lucide-react";
import "./App.css";

function Services() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: "Emergency Services",
      icon: Ambulance,
      location: "Multiple Locations",
      status: "Operational",
      category: "Emergency",
      description: "24/7 emergency response including fire, police, and medical services",
      hours: "24/7",
      contact: "911",
      color: "#f87171",
    },
    {
      id: 2,
      name: "Public Transportation",
      icon: Bus,
      location: "Citywide",
      status: "Operational",
      category: "Transportation",
      description: "Bus and metro services throughout the city with real-time tracking",
      hours: "5:00 AM - 12:00 AM",
      contact: "(555) 456-7890",
      color: "#60a5fa",
    },
    {
      id: 3,
      name: "Waste Management",
      icon: Trash2,
      location: "Citywide",
      status: "Operational",
      category: "Sanitation",
      description: "Garbage collection and recycling services for all areas",
      hours: "Monday-Saturday, 6:00 AM - 2:00 PM",
      contact: "(555) 567-8901",
      color: "#34d399",
    },
    {
      id: 4,
      name: "Water Department",
      icon: Droplet,
      location: "321 Water Works Drive",
      status: "Operational",
      category: "Utilities",
      description: "Water supply and sewage services maintenance",
      hours: "Monday-Friday, 8:00 AM - 5:00 PM",
      contact: "(555) 678-9012",
      color: "#06b6d4",
    },
    {
      id: 5,
      name: "Power Department",
      icon: Zap,
      location: "456 Power Station Road",
      status: "Operational",
      category: "Utilities",
      description: "Electricity supply and infrastructure management",
      hours: "24/7 (Emergency)",
      contact: "(555) 789-0123",
      color: "#fbbf24",
    },
    {
      id: 6,
      name: "Municipal Building",
      icon: Building2,
      location: "789 City Hall",
      status: "Operational",
      category: "Government",
      description: "City administration and citizen services office",
      hours: "Monday-Friday, 9:00 AM - 5:00 PM",
      contact: "(555) 890-1234",
      color: "#a78bfa",
    },
  ];

  return (
    <div className="services-container">
      {/* HEADER */}
      <div className="services-header">
        <Link to="/admin" className="back-link-btn">
          ← Back to Admin Dashboard
        </Link>
      </div>

      <div className="services-hero">
        <h1>City Services</h1>
        <p>Access all essential city services and utilities</p>
      </div>

      {/* SERVICE CARDS GRID */}
      <div className="services-wrapper">
        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            const isSelected = selectedService?.id === service.id;

            return (
              <div
                key={service.id}
                className={`service-card-new ${isSelected ? "active" : ""}`}
                onClick={() =>
                  setSelectedService(
                    isSelected ? null : service
                  )
                }
                style={{ borderLeftColor: service.color }}
              >
                {/* CARD HEADER */}
                <div className="service-card-header">
                  <div
                    className="service-icon"
                    style={{ backgroundColor: service.color }}
                  >
                    <IconComponent size={28} color="white" />
                  </div>
                  <span
                    className="service-status-badge"
                    style={{ backgroundColor: service.color }}
                  >
                    {service.status}
                  </span>
                </div>

                {/* CARD TITLE */}
                <h3 className="service-name">{service.name}</h3>

                {/* CARD DESCRIPTION */}
                <p className="service-description">{service.description}</p>

                {/* CARD INFO - VISIBLE ONLY ON HOVER/CLICK */}
                {isSelected && (
                  <div className="service-details">
                    <div className="detail-item">
                      <MapPin size={16} />
                      <span>{service.location}</span>
                    </div>
                    <div className="detail-item">
                      <Clock size={16} />
                      <span>{service.hours}</span>
                    </div>
                    <div className="detail-item">
                      <Phone size={16} />
                      <span>{service.contact}</span>
                    </div>
                  </div>
                )}

                {/* EXPAND INDICATOR */}
                <div className="service-expand">
                  <ChevronRight
                    size={20}
                    className={isSelected ? "rotated" : ""}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTTOM INFO */}
      <div className="services-footer">
        <p>💡 Click on any service card to view more details</p>
      </div>
    </div>
  );
}

export default Services;