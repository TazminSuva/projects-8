import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { useAppContext } from "../components/context/AppContext";

// Hero image
import heroImg from "../assets/assets/hero.png";
const statsData = [
  { value: '29.6M', label: 'Total Downloads', subText: '27% More Than Last Month' },
  { value: '906K', label: 'Total Reviews', subText: '40% More Than Last Month' },
  { value: '132+', label: 'Active Apps', subText: '2X Since 2021 Launch' },
];
// App images
import demo1 from "../assets/assets/demo-app (1).webp";
import demo2 from "../assets/assets/demo-app (2).webp";
import demo3 from "../assets/assets/demo-app (3).webp";
import demo4 from "../assets/assets/demo-app (4).webp";
import demo5 from "../assets/assets/demo-app (5).webp";
import demo6 from "../assets/assets/demo-app (6).webp";
import demo7 from "../assets/assets/demo-app (5).webp";
import demo8 from "../assets/assets/demo-app (4).webp";

export default function Home() {
  const { apps } = useAppContext();
  const navigate = useNavigate();
  const appsToShow = apps.slice(0, 8).map((app) => {
    let img;
    switch (app.id) {
      case 1: img = demo1; break;
      case 2: img = demo2; break;
      case 3: img = demo3; break;
      case 4: img = demo4; break;
      case 5: img = demo5; break;
      case 6: img = demo6; break;
      case 7: img = demo1; break;
      case 8: img = demo4; break;
      default: img = demo1;
    }
    return { ...app, image: img };
  });

  return (
    <div className="font-sans text-gray-800 py-18 bg-gray">
      {/* Hero Section */}
      <section className="text-center py-2 px-6 md:px-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          We Build <br />
          <span className="text-indigo-600">Productive</span> Apps
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        {/* Download Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <a
            href="https://play.google.com/store/apps/details?id=your.app.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
          >
            <FaGooglePlay /> Google Play
          </a>

          <a
            href="https://apps.apple.com/app/id1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition"
          >
            <FaApple /> App Store
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="App Mockup"
            className="max-w-xs md:max-w-md drop-shadow-2xl"
          />
        </div>
      </section>
 {/* 2. Stats Section - Trusted By Millions */}
      <section className="py-12 md:py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          
          <h3 className="text-3xl md:text-4xl font-extrabold mb-8">
            Trusted By Millions, Built For You
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="p-4 flex flex-col items-center justify-center"
              >
                <p className="text-4xl sm:text-5xl font-extrabold mb-1 leading-none">
                  {stat.value}
                </p>
                
                <p className="text-lg text-purple-200 uppercase tracking-widest mt-2 mb-1">
                  {stat.label}
                </p>
                
                <p className="text-sm text-purple-300 font-medium">
                  {stat.subText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Trending Apps */}
      <section className="py-16 px-6 md:px-16 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-4">Trending Apps</h3>
        <p className="text-gray-600 mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {appsToShow.map((app) => (
            <Link
              key={app.id}
              to={`/apps/${app.id}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-4 block"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-60 object-cover rounded-lg mb-3"
              />
              <h4 className="font-semibold mb-1 text-gray-800">{app.title}</h4>
              <div className="flex justify-between items-center mt-2">
                <button className="px-3 py-1 bg-green-500 text-white text-xs rounded-lg font-medium">
                  Free
                </button>
                <span className="text-sm text-yellow-500 font-semibold">
                  ⭐ {app.ratingAvg}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={() => navigate("/apps")}
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
        >
          Show All
        </button>
      </section>
    </div>
  );
};
