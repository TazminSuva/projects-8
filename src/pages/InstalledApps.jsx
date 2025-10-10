import React, { useState, useEffect } from "react";
import { FaStar, FaDownload } from "react-icons/fa";

function InstalledApps() {
  const [apps, setApps] = useState([
    { id: 1, title: "Forest: Focus", downloads: "9M", rating: 5, size: "258 MB" },
    { id: 2, title: "Todoist", downloads: "1.2M", rating: 4, size: "150 MB" },
    { id: 3, title: "Pomodoro Timer", downloads: "500K", rating: 5, size: "80 MB" },
  ]);

  const [msg, setMsg] = useState("");

  const remove = (id, title) => {
    let copy = apps.filter((x) => x.id !== id);
    setApps(copy);
    setMsg(`"${title}" removed successfully`);
  };

  useEffect(() => {
    if (msg) {
      let t = setTimeout(() => setMsg(""), 2500);
      return () => clearTimeout(t);
    }
  }, [msg]);

  const getValue = (v) => {
    if (v.endsWith("M")) return parseFloat(v) * 1000000;
    if (v.endsWith("K")) return parseFloat(v) * 1000;
    return parseFloat(v);
  };

  const sortIt = (way) => {
    let arr = [...apps];
    if (way === "low") arr.sort((a, b) => getValue(a.downloads) - getValue(b.downloads));
    if (way === "high") arr.sort((a, b) => getValue(b.downloads) - getValue(a.downloads));
    setApps(arr);
  };

  return (
    <div style={{ background: "#f4f4f4", minHeight: "100vh" }}>
      {/* Notification */}
      {msg && (
        <div
          style={{
            position: "fixed",
            top: 15,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#16a34a",
            color: "white",
            padding: "8px 20px",
            borderRadius: "6px",
            fontSize: "14px",
            zIndex: 999,
          }}
        >
          {msg}
        </div>
      )}

      {/* Header */}
      <div
        style={{
          background: "#ddd",
          textAlign: "center",
          padding: "35px 0",
        }}
      >
        <h1 style={{ fontSize: "30px", fontWeight: "bold", color: "#111" }}>
          My Installed Apps
        </h1>
        <p style={{ color: "#555", marginTop: 5 }}>All installed apps shown here</p>
      </div>

      {/* Sort Section */}
      <div
        style={{
          maxWidth: 800,
          margin: "25px auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <h3>{apps.length} App{apps.length > 1 && "s"} Found</h3>
          <select
            onChange={(e) => sortIt(e.target.value)}
            style={{ padding: "5px 10px", borderRadius: "5px" }}
          >
            <option value="">Sort by Downloads</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>

        {/* App List */}
        {apps.map((a) => (
          <div
            key={a.id}
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "8px",
              marginBottom: 15,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  background: "#eee",
                  borderRadius: 10,
                  marginRight: 15,
                }}
              ></div>
              <div>
                <h4 style={{ marginBottom: 4 }}>{a.title}</h4>
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    fontSize: "13px",
                    color: "#555",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <FaDownload style={{ marginRight: 5, color: "green" }} />
                    {a.downloads}
                  </span>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <FaStar style={{ marginRight: 5, color: "orange" }} />
                    {a.rating}
                  </span>
                  <span>{a.size}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => remove(a.id, a.title)}
              style={{
                background: "#16a34a",
                color: "#fff",
                border: "none",
                padding: "7px 15px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstalledApps;
