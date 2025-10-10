import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx';
import './index.css';
import Home from './pages/Home.jsx';
import AllApps from './pages/AllApps.jsx';
import AppDetails from './pages/AppDetails.jsx';
import MyInstallation from './pages/MyInstallation.jsx';
import InstalledApps from './pages/InstalledApps.jsx'; 
import ErrorPage from './pages/ErrorPage.jsx';

import { AppProvider } from "./components/context/AppContext.js"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "apps", element: <AllApps /> },
      { path: "app/:id", element: <AppDetails /> },
      { path: "my-installation", element: <MyInstallation /> },
      { path: "installedApps", element: <InstalledApps /> },
    ],
  },
]);

const demoApps = [
  {
    id: 1,
    title: "Forest: Focus For Productivity",
    companyName: "FocusLabs",
    ratingAvg: 4.9,
    downloads: 125000,
    reviews: 2100,
    image: "/src/assets/assets/demo-app (1).webp",
    size: 28,
    description: "Stay focused and be productive with this beautiful timer app.",
    ratings: [
      { name: "⭐5", count: 1800 },
      { name: "⭐4", count: 200 },
      { name: "⭐3", count: 70 },
      { name: "⭐2", count: 20 },
      { name: "⭐1", count: 10 },
    ]
  },
  {
    id: 2,
    title: "SmartTodo: List With Reminder",
    companyName: "SmartTech",
    ratingAvg: 4.8,
    downloads: 96000,
    reviews: 1400,
    image: "/src/assets/assets/demo-app (2).webp",
    size: 20,
    description: "Organize tasks easily and get reminders on time.",
    ratings: [
      { name: "⭐5", count: 1100 },
      { name: "⭐4", count: 200 },
      { name: "⭐3", count: 70 },
      { name: "⭐2", count: 20 },
      { name: "⭐1", count: 10 },
    ]
  }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider initialApps={demoApps}>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
);
