import React, { useState, useMemo, useEffect } from "react";
const IconSearch = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.1-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
    />
  </svg>
);
const IconDownload = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm100.8 288.7l-94 94c-4.7 4.7-12.3 4.7-17 0l-94-94c-4.7-4.7-4.7-12.3 0-17s12.3-4.7 17 0L224 337.5V136c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v201.5l51.8-51.8c4.7-4.7 12.3-4.7 17 0s4.7 12.3 0 17z" />
  </svg>
);
const IconStar = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512" >
    <path
      fill="currentColor"
      d="M259.3 17.8L194 150.3 47.9 161.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l129 68.2c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.3 316.7 17.8c-11.7-25-46.3-25-58.4 0z"
    />
  </svg>
);

const IconArrowLeft = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg" >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    ></path>
  </svg>
);
const IconTotalReviews = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M123.5 25.1c16.3-4.2 32.9-2.1 47.2 4.6c17.5 8 32.8 21.4 44.8 38.6c13.7 19.3 21.4 42.7 21.4 67.5c0 14.8-2.6 28.7-7.4 41.6c-4.5 12-11 23.6-19.4 34.3c-28.7 36.7-65 67.3-108 89.2c-25.2 12.9-52.5 22.9-80 30.2c-15.6 4.1-31.5 6-47.5 6c-21.5 0-42.5-4-61.9-11.8c-17-7.1-32.9-16.1-47.5-27c-30.8-23-57.5-50-79.6-80.4c-4.4-6.1-8.5-12.4-12.4-18.9c-2.4-3.8-4.7-7.6-6.8-11.6c-3.7-7-6.9-14.3-9.5-21.9c-1.3-3.8-2.6-7.7-3.6-11.8c-1.2-4.5-2.2-9-3-13.7c-.5-2.2-.9-4.5-1.2-6.7c-1.1-6.7-1.7-13.6-1.7-20.5c0-43.5 27.2-82.5 67.8-107.5c16.3-10.3 34.7-18.7 54.3-25.2c19-6.3 39.5-9.6 60.2-9.6c15.1 0 30.5 2.1 45.4 6.2zM388.5 25.1c-16.3-4.2-32.9-2.1-47.2 4.6c-17.5 8-32.8 21.4-44.8 38.6c-13.7 19.3-21.4 42.7-21.4 67.5c0 14.8 2.6 28.7 7.4 41.6c4.5 12 11 23.6 19.4 34.3c28.7 36.7 65 67.3 108 89.2c25.2 12.9 52.5 22.9 80 30.2c15.6 4.1 31.5 6 47.5 6c21.5 0 42.5-4 61.9-11.8c17-7.1 32.9-16.1 47.5-27c30.8-23 57.5-50 79.6-80.4c4.4-6.1 8.5-12.4 12.4-18.9c2.4-3.8 4.7-7.6 6.8-11.6c3.7-7 6.9-14.3 9.5-21.9c1.3-3.8 2.6-7.7 3.6-11.8c1.2-4.5 2.2-9 3-13.7c.5-2.2-.9-4.5-1.2-6.7c-1.1-6.7-1.7-13.6-1.7-20.5c0-43.5-27.2-82.5-67.8-107.5c-16.3-10.3-34.7-18.7-54.3-25.2c-19-6.3-39.5-9.6-60.2-9.6c-15.1 0-30.5 2.1-45.4 6.2z"
    />
  </svg>
);
const IconRating = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path
      fill="currentColor"
      d="M316.9 18C303.8 6.4 280.9 6.4 267.8 18L10 257.6c-12.8 11.2-16 28.8-8 44.5c8 15.6 24 25.4 41.6 25.4H96V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V327.5h52.4c17.6 0 33.6-9.8 41.6-25.4c8-15.7 4.8-33.3-8-44.5L316.9 18z"
    />
  </svg>
);
const formatDownloads = (count) => {
  return (count / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
};

const calculateSize = (count) => {
  const baseMB = 100; 
  const multiplier = 20;
  return (baseMB + (count / 1000000) * multiplier).toFixed(0);
};

const initialApps = [
  {
    id: 1,
    title: "Forest: Focus for Productivity",
    developer: "SeekrTech",
    totalReviews: "45K",
    downloads: 9500000,
    rating: 5.0,
    icon: "🌲",
    description:
      "This focus app utilizes the **well-established Pomodoro Technique** and makes it more practical for modern lifestyles. Instead of just setting a timer, it creates a complete environment for deep work, distraction reduction, and maximizing concentration. Users can create custom tasks and breaks to match their needs, review how quickly they complete each session, and analyze detailed statistics of their focus habits over time. The design is minimalist, helping to reduce cognitive load so you can focus completely on the task at hand. It informs you when to take a break and when to resume, helping maintain a healthy rhythm between your work and rest.",
    ratingsBreakdown: { 5: 10000, 4: 5000, 3: 2000, 2: 800, 1: 500 },
  },
  {
    id: 2,
    title: "SmPlan: ToDo List with Reminder",
    developer: "productive.io",
    totalReviews: "54K",
    downloads: 8900000,
    rating: 4.9,
    icon: "📝",
    description:
      "SmPlan is a powerful, yet simple, to-do list and task planner designed to keep your day structured and organized. It features smart reminders, customizable priority levels, and drag-and-drop task reordering. You can categorize tasks by project or due date and view your progress through intuitive charts. Its minimalist interface ensures that managing your tasks is quick and efficient, helping you tackle complex projects one step at a time and stay on top of your deadlines.",
    ratingsBreakdown: { 5: 11000, 4: 6000, 3: 1500, 2: 400, 1: 200 },
  },
  {
    id: 3,
    title: "FLIP - Focus Timer for Study",
    developer: "The Study Team",
    totalReviews: "60K",
    downloads: 9000000,
    rating: 5.0,
    icon: "📚",
    description:
      "FLIP is a simple yet powerful **flip-style digital stopwatch** designed specifically for students. It helps track study time accurately, organize sessions by subject, and allows users to compete with friends globally. The minimalist design is suitable for a distraction-free learning environment. Simply start your study session with a flip!",
    ratingsBreakdown: { 5: 12000, 4: 4000, 3: 1000, 2: 300, 1: 100 },
  },
  {
    id: 4,
    title: "Pomocat - Cute Pomodoro Timer",
    developer: "Cat Developers",
    totalReviews: "35K",
    downloads: 8500000,
    rating: 4.9,
    icon: "🐱",
    description:
      "A fun and adorable Pomodoro timer featuring a **cute cat companion**. Pomocat helps you follow the standard 25 minutes of work, 5 minutes of break cycle, and rewards you with accessories for your virtual cat. It makes focused work enjoyable and fruitful. Perfect for users who need a gentle, gamified push towards productivity.",
    ratingsBreakdown: { 5: 9000, 4: 7000, 3: 2000, 2: 500, 1: 100 },
  }, 
  ...Array(16)
    .fill(null)
    .map((_, i) => {
      const baseId = 5;
      const baseTitle = [
        "Time Planner: Schedule & Tasks",
        "Morning Habits - Daily Routine",
        "Focus Plant: Pomodoro Forest",
        "Alarmy - Alarm Clock & Sleep",
      ][i % 4];
      const baseIcon = ["🗓️", "☀️", "🪴", "⏰"][i % 4];
      const baseRating = 4.5;
      return {
        id: baseId + i,
        title: baseTitle,
        developer: i % 2 === 0 ? "Global Devs" : "Indie Studio",
        totalReviews: `${30 + i}K`,
        downloads: 8000000 - i * 50000,
        rating: baseRating,
        icon: baseIcon,
        description:
          "This productivity app offers **essential features** for scheduling, task management, and daily planning, helping you keep your life organized and highly efficient. It is designed with a clean interface for **minimal distraction**.",
        ratingsBreakdown: { 5: 8000, 4: 1000, 3: 300, 2: 100, 1: 50 },
      };
    }),
];
const RatingBar = ({ star, count, totalCount }) => {
  const percentage = Math.max(1, (count / totalCount) * 100);
  const starText = {
    5: "5 star",
    4: "4 star",
    3: "3 star",
    2: "2 star",
    1: "1 star",
  };
  return (
    <div className="flex items-center space-x-4 py-1.5">
      <span className="text-sm font-medium text-gray-700 w-12 text-right">
        {starText[star]}
      </span>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-orange-500 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-sm text-gray-500 w-10 text-left">
        {count.toLocaleString()}
      </span>
    </div>
  );
};

const AppDetail = ({ app, onBack }) => {
  // State for installation process and notification
  const [isInstalling, setIsInstalling] = useState(false);
    const [installed, setInstalled] = useState(false);

  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationType, setNotificationType] = useState("success"); 

  const totalReviewsForBars = Object.values(app.ratingsBreakdown).reduce(
    (sum, count) => sum + count,
    0
  );
 useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const isAppInstalled = installedApps.some((a) => a.id === app.id);
    setInstalled(isAppInstalled); // প্রথমে state update হবে
  }, [app.id]);

  const handleInstall = () => {
    if (isInstalling) return;

    setIsInstalling(true);
    setNotificationMessage(null); 

    setTimeout(() => {
      setIsInstalling(false);
      setInstalled(true);
      setNotificationType("success");
      setNotificationMessage(`Successfully installed: ${app.title}`); 
      setTimeout(() => {
        setNotificationMessage(null);
      }, 4000);
    }, 2000); 
  }; 

  const NotificationToast = () => {
    if (!notificationMessage) return null;

    const baseClasses =
      "fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-xl text-white font-semibold z-50 transition-opacity duration-300";
    const successClasses = "bg-green-500";
    const errorClasses = "bg-red-500";
    return (
      <div
        className={`${baseClasses} ${notificationType === "success" ? successClasses : errorClasses
          }`} >
        {notificationMessage}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative">
      <NotificationToast />
      <div className="bg-white py-8 border-b border-gray-100 shadow-md">
        <div className="container mx-auto px-4 max-w-4xl">
          <button
            onClick={onBack}
            className="mb-6 flex items-center text-indigo-600 hover:text-indigo-800 transition font-medium text-sm"
          >
            <IconArrowLeft className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Back to All Apps</span>
          </button>
          <div className="flex items-start md:items-center space-x-6">
            <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center text-5xl flex-shrink-0 shadow-lg">
              {app.icon}
            </div>
            <div className="flex-grow">
              <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
                {app.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Developed by
                <span className="text-indigo-600 font-semibold">
                  {app.developer}
                </span>
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-between items-center border-t pt-6">
            <div className="flex space-x-8 text-sm md:text-base">
              <div className="flex flex-col items-center">
                <IconDownload className="text-indigo-500 w-6 h-6 mb-1" />
                <p className="font-bold text-gray-800">
                  {formatDownloads(app.downloads)}
                </p>
                <p className="text-xs text-gray-500">Downloads</p>
              </div>
              <div className="flex flex-col items-center">
                <IconRating className="text-indigo-500 w-6 h-6 mb-1" />
                <p className="font-bold text-gray-800">{app.rating}</p>
                <p className="text-xs text-gray-500">Average Ratings</p>
              </div>
              <div className="flex flex-col items-center">
                <IconTotalReviews className="text-indigo-500 w-6 h-6 mb-1" />
                <p className="font-bold text-gray-800">{app.totalReviews}</p>
                <p className="text-xs text-gray-500">Total Reviews</p>
              </div>
            </div>
            <button
              onClick={handleInstall}
              disabled={isInstalling}
              className={`mt-6 md:mt-0 px-6 py-2.5 text-white font-bold rounded-lg shadow-md transition-colors duration-200 
  ${isInstalling
                  ? "bg-gray-400 cursor-not-allowed flex items-center justify-center"
                  : "bg-green-500 hover:bg-green-600"
                }`} >
              {isInstalling ? (
          <span className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24" >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4" ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" ></path>
            </svg>
            Installing...
          </span>
        ) : installed ? (
          "Installed"
        ) : (
          "Install Now"
        )}
      </button>
          </div>
        </div>
      </div>
      <div className="flex-grow container mx-auto px-4 max-w-4xl py-8">
       
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          
          <h3 className="text-xl font-bold text-gray-800 mb-4">Ratings</h3>{" "}
          {Object.keys(app.ratingsBreakdown)
            .sort((a, b) => b - a)
            .map((star) => (
              <RatingBar
                key={star}
                star={Number(star)}
                count={app.ratingsBreakdown[star]}
                totalCount={totalReviewsForBars}
              />
            ))}
          <div className="border-t border-gray-200 mt-6 pt-6"></div>
          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-4">
            Description
          </h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {app.description}
            <br />
            <br />
            A unique feature of this app is the integration of task lists with
            timers. Thus, you can assign each task to a specific Pomodoro
            session, making your schedule more structured. The
            built-in analytics show not only how much time  you've
            worked but also which tasks consumed the most energy. This
            allows you to reflect on your efficiency and adjust your workflow
            accordingly. The app also includes optional background
            sounds such as white noise, nature sounds, or
            instrumental music to create a distraction-free atmosphere. <br />
            <br /> For people who struggle with procrastination, the app
            provides motivational streaks and achievements. Completing multiple
            Pomodoro sessions unlocks milestones, giving a sense of
            accomplishment. This gamified approach makes focusing
            more engaging and less like a chore. Whether you're
            studying for exams, coding, writing, or handling office work, the
            app adapts to your routine. By combining focus tracking,
            task management, and motivational tools, this Pomodoro
            app ensures that you not only work harder but also smarter. It is a
            personal trainer for your brain, keeping you disciplined, refreshed,
            and productive throughout the day.
          </p>
        </div>
      </div>
    </div>
  );
};

const AppCard = ({ app, onAppClick }) => {
  return (
    <div
      className="bg-white p-3.5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-200 hover:-translate-y-1 cursor-pointer"
      onClick={() => onAppClick(app)}
    >
      <div className="w-full square-placeholder aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-4xl">
        {app.icon}
      </div>
      <p className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 leading-tight">
        {app.title}
      </p>
      <div className="flex justify-between items-center text-xs text-gray-500 pt-1">
        <span className="flex items-center">
          <IconDownload className="text-black-500 mr-1.5 w-3.5 h-3.5" />
          {formatDownloads(app.downloads)}
        </span>
        <span className="flex items-center">
          <IconStar className="text-orange-400 mr-1.5 w-3.5 h-3.5" />
          {app.rating}
        </span>
      </div>
    </div>
  );
};



const ApplicationsPage = () => {
  const apps = initialApps; 

  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const totalAppsCount = 120;
  const [selectedApp, setSelectedApp] = useState(null);

  const handleAppClick = (app) => {
    setSelectedApp(app);
  };

  const handleBackClick = () => {
    setSelectedApp(null);
  };

  const filteredAndSortedApps = useMemo(() => {
    if (isLoading) return []; 
    const filtered = apps.filter((app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    ); 

    return filtered.sort((a, b) => b.downloads - a.downloads);
  }, 
  [apps, searchTerm, isLoading]); 

  useEffect(() => {
    if (searchTerm) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    } 
    else {
      setIsLoading(false);
    }
  }, [searchTerm]);

  if (selectedApp) {
    return <AppDetail app={selectedApp} onBack={handleBackClick} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <div className="bg-white py-12 border-b border-gray-100 shadow-sm mb-8">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-4xl font-extrabold text-gray-800 text-center">
              Our Applications 
            </h1>
            <p className="text-lg text-gray-500 text-center mt-2">
              Explore All Apps on the Market developed by us. We code for
              Millions 
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 px-2">
            <div className="text-gray-600 font-medium text-lg mb-4 md:mb-0">
              ({totalAppsCount}) Apps Found 
            </div>
            <div className="flex w-full md:w-auto">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search apps by title..."
                  className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 w-full transition"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} />
                <IconSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <svg
                className="animate-spin h-8 w-8 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4" ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" ></path>
              </svg>
            </div>
          ) : (
            <>
              {filteredAndSortedApps.length === 0 && searchTerm ? (
                <div className="text-center py-20 bg-white rounded-xl shadow-md border border-gray-200">
                  <h3 className="text-3xl font-bold text-red-500">
                    No App Found 
                  </h3>
                  <p className="text-gray-500 mt-2">
                    We couldn't find any app matching "{searchTerm}". Try
                    another search term.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-12">
                
                  {filteredAndSortedApps.map((app) => (
                    <AppCard
                      key={app.id}
                      app={app}
                      onAppClick={handleAppClick}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};
const AllApps = () => {
  return <ApplicationsPage />;
};

export default AllApps;
