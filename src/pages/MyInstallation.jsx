import React from "react";
import { useAppContext } from "../components/context/AppContext";
import { FaTrash, FaSadTear, FaStar } from "react-icons/fa";

export default function MyInstallation() {
  const { installedApps, uninstallApp } = useAppContext();

  const removeApp = (id, title) => {
    const confirmDelete = window.confirm("Do you want to remove " + title + "?");
    if (confirmDelete) {
      uninstallApp(id);
    }
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "#16a34a" }}>My Installed Apps</h1>
        <p style={{ fontSize: "18px", color: "#555", marginTop: "5px" }}>
          Total Installed: <strong>{installedApps.length}</strong> Apps
        </p>
      </div>

      {installedApps.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px", backgroundColor: "#f3f4f6", borderRadius: "10px" }}>
          <FaSadTear style={{ fontSize: "60px", color: "#3b82f6", marginBottom: "20px" }} />
          <h3 style={{ fontSize: "28px", fontWeight: "bold", color: "#3b82f6" }}>No Apps Installed Yet</h3>
          <p style={{ color: "#555", marginTop: "10px" }}>
            Go to <a href="/apps" style={{ color: "#6366f1", textDecoration: "underline" }}>All Apps</a> to install your first app.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
          {installedApps.map((app) => (
            <div key={app.id} style={{ backgroundColor: "#fff", borderRadius: "10px", padding: "15px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <img 
                  src={app.image || "https://via.placeholder.com/80"} 
                  alt={app.title} 
                  style={{ width: "60px", height: "60px", borderRadius: "8px", objectFit: "cover" }} 
                />
                <div>
                  <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#111" }}>{app.title}</h2>
                  <p style={{ fontSize: "14px", color: "#777" }}>{app.companyName || "Unknown Company"}</p>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "15px", borderTop: "1px solid #e5e7eb", paddingTop: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", color: "#facc15", fontWeight: "bold", fontSize: "14px" }}>
                  <FaStar style={{ marginRight: "5px" }} /> {app.ratingAvg ? app.ratingAvg.toFixed(1) : "0.0"}
                </div>
                <button 
                  onClick={() => removeApp(app.id, app.title)} 
                  style={{ backgroundColor: "#ef4444", color: "#fff", padding: "6px 12px", borderRadius: "6px", border: "none", cursor: "pointer" }}
                >
                  <FaTrash style={{ marginRight: "5px" }} /> Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
