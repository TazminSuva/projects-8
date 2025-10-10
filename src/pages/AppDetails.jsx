import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../components/context/AppContext";
import { FaStar, FaDownload, FaCheckCircle } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";

export default function AppDetails() {
  const { appId } = useParams();
  const { apps, installedApps, installApp } = useAppContext();
  const navigate = useNavigate();

  const app = apps.find((a) => a.id == appId);

  if (!app) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-red-500 mb-4">App Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg"
        >
          Go Home
        </button>
      </div>
    );
  }

  const isInstalled = installedApps.some((a) => a.id == app.id);

  const formatDownloads = (num) => {
    if (num >= 1000000) return Math.round(num / 1000000) + "M+";
    if (num >= 1000) return Math.round(num / 1000) + "K+";
    return num;
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6 mb-10 bg-gray-100 p-6 rounded-xl shadow-md">
        <img
          src={app.image}
          alt={app.title}
          className="w-40 h-40 rounded-xl object-cover shadow-lg"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{app.title}</h1>
          <p className="text-gray-600 mb-4">By {app.companyName}</p>

          <div className="flex gap-6 mb-4">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" /> <span>{app.ratingAvg}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaDownload /> <span>{formatDownloads(app.downloads)}</span>
            </div>
            <div className="flex items-center gap-1">
              <BsChatDotsFill /> <span>{app.reviews.toLocaleString()}</span>
            </div>
          </div>

          <button
            onClick={() => installApp(app)}
            disabled={isInstalled}
            className={`px-4 py-2 rounded-lg text-white ${
              isInstalled
                ? "bg-green-500 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isInstalled ? (
              <>
                <FaCheckCircle className="inline mr-2" />
                Installed
              </>
            ) : (
              `Install (${app.size} MB)`
            )}
          </button>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-700 leading-relaxed">{app.description}</p>
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
