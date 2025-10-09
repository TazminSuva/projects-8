import React, { useState } from "react";
import { FaStar, FaDownload } from "react-icons/fa";

export default function InstalledApps() {
  const [myApps, setMyApps] = useState([
    { id: 1, title: "Forest: Focus", downloads: "9M", rating: 5, size: "258 MB" },
    { id: 2, title: "Forest: Focus", downloads: "9M", rating: 5, size: "258 MB" },
    { id: 3, title: "Forest: Focus", downloads: "9M", rating: 5, size: "258 MB" },
  ]);

  const removeApp = (id) => {
    const newApps = myApps.filter((a) => a.id !== id);
    setMyApps(newApps);
  };

  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh", fontFamily: "sans-serif" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#eee", padding: "40px 0", textAlign: "center" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#111" }}>Your Installed Apps</h1>
        <p style={{ color: "#666", marginTop: "10px" }}>All the apps you have installed from us</p>
      </div>

      {/* Apps List */}
      <div style={{ maxWidth: "800px", margin: "30px auto", padding: "0 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <h2>{myApps.length} App{myApps.length !== 1 ? "s" : ""} Found</h2>
          <select style={{ padding: "5px 10px" }}>
            <option>Sort by Size</option>
            <option>Sort by Rating</option>
          </select>
        </div>

        {myApps.map((app) => (
          <div key={app.id} style={{ backgroundColor: "#fff", borderRadius: "10px", padding: "15px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ width: "50px", height: "50px", backgroundColor: "#ddd", borderRadius: "10px", marginRight: "15px" }}></div>
              <div>
                <h3 style={{ fontWeight: "bold", color: "#333" }}>{app.title}</h3>
                <div style={{ display: "flex", gap: "15px", marginTop: "5px", fontSize: "14px", color: "#555" }}>
                  <span style={{ display: "flex", alignItems: "center" }}><FaDownload style={{ marginRight: "5px", color: "green" }} />{app.downloads}</span>
                  <span style={{ display: "flex", alignItems: "center" }}><FaStar style={{ marginRight: "5px", color: "orange" }} />{app.rating}</span>
                  <span>{app.size}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => removeApp(app.id)} 
              style={{ backgroundColor: "#10b981", color: "#fff", padding: "8px 15px", borderRadius: "8px", border: "none", cursor: "pointer" }}
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
