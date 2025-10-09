import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

function AppProvider({ children }) {

  const [apps, setApps] = useState([
    {
      id: 1,
      title: "Forest: Focus For Productivity",
      companyName: "Forest Studio",
      ratingAvg: 4.9,
      downloads: 29600000,
      reviews: 906000,
      description: "Stay focused and plant virtual trees as you work. Every focused session helps you grow a digital forest and improve your productivity.",
      size: 45,
      ratings: [
        { name: "5★", count: 600000 },
        { name: "4★", count: 200000 },
        { name: "3★", count: 60000 },
        { name: "2★", count: 40000 },
        { name: "1★", count: 6000 },
      ],
    },
    {
      id: 2,
      title: "SmartTodo: List With Reminder",
      companyName: "Taskify Inc.",
      ratingAvg: 4.8,
      downloads: 15000000,
      reviews: 500000,
      description: "Organize your daily life with SmartTodo. Set smart reminders, manage lists, and track your goals easily.",
      size: 38,
      ratings: [
        { name: "5★", count: 300000 },
        { name: "4★", count: 120000 },
        { name: "3★", count: 50000 },
        { name: "2★", count: 20000 },
        { name: "1★", count: 10000 },
      ],
    },
    {
      id: 3,
      title: "FLIP - Focus Timer For Study",
      companyName: "FlipTime",
      ratingAvg: 4.7,
      downloads: 23000000,
      reviews: 780000,
      description: "Boost productivity with the FLIP timer designed for students and professionals who love Pomodoro.",
      size: 55,
      ratings: [
        { name: "5★", count: 400000 },
        { name: "4★", count: 200000 },
        { name: "3★", count: 100000 },
        { name: "2★", count: 50000 },
        { name: "1★", count: 30000 },
      ],
    },
    {
      id: 4,
      title: "Pomocat - Cute Pomodoro Timer",
      companyName: "FocusCats",
      ratingAvg: 4.9,
      downloads: 19000000,
      reviews: 600000,
      description: "Adorable cats cheer you up while you stay productive using Pomodoro techniques!",
      size: 40,
      ratings: [
        { name: "5★", count: 400000 },
        { name: "4★", count: 120000 },
        { name: "3★", count: 50000 },
        { name: "2★", count: 20000 },
        { name: "1★", count: 10000 },
      ],
    },
    {
      id: 5,
      title: "Time Planner: Schedule & Tasks",
      companyName: "PlanIt Studio",
      ratingAvg: 4.8,
      downloads: 21000000,
      reviews: 710000,
      description: "Plan your time effectively and manage daily schedules with an intuitive time planner.",
      size: 52,
      ratings: [
        { name: "5★", count: 400000 },
        { name: "4★", count: 200000 },
        { name: "3★", count: 80000 },
        { name: "2★", count: 20000 },
        { name: "1★", count: 10000 },
      ],
    },
    {
      id: 6,
      title: "Morning Habits - Daily Routine",
      companyName: "Rise & Shine",
      ratingAvg: 4.6,
      downloads: 18000000,
      reviews: 540000,
      description: "Start your mornings right with customizable routines and positive habit tracking.",
      size: 49,
      ratings: [
        { name: "5★", count: 300000 },
        { name: "4★", count: 120000 },
        { name: "3★", count: 60000 },
        { name: "2★", count: 40000 },
        { name: "1★", count: 10000 },
      ],
    },
    {
      id: 7,
      title: "ZenWork: Deep Focus Mode",
      companyName: "MindEase Apps",
      ratingAvg: 4.8,
      downloads: 25000000,
      reviews: 880000,
      description: "ZenWork blocks distractions and helps you focus deeply with ambient sounds.",
      size: 61,
      ratings: [
        { name: "5★", count: 500000 },
        { name: "4★", count: 200000 },
        { name: "3★", count: 100000 },
        { name: "2★", count: 50000 },
        { name: "1★", count: 30000 },
      ],
    },
    {
      id: 8,
      title: "StudyWave - Concentration Boost",
      companyName: "WaveLabs",
      ratingAvg: 4.7,
      downloads: 17000000,
      reviews: 490000,
      description: "Listen to scientifically designed focus sounds to improve study and concentration sessions.",
      size: 58,
      ratings: [
        { name: "5★", count: 400000 },
        { name: "4★", count: 150000 },
        { name: "3★", count: 60000 },
        { name: "2★", count: 40000 },
        { name: "1★", count: 10000 },
      ],
    },
  ]);

  const [installedApps, setInstalledApps] = useState([]);
  const installApp = (app) => {
    const alreadyInstalled = installedApps.some(a => a.id === app.id);
    if (!alreadyInstalled) {
      setInstalledApps(prev => [...prev, app]);
    }
  };

  const uninstallApp = (appId) => {
    setInstalledApps(prev => prev.filter(a => a.id !== appId));
  };

  return (
    <AppContext.Provider value={{ apps, setApps, installedApps, installApp, uninstallApp }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export { AppProvider };
