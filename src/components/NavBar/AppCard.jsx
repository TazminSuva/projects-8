import React from "react";
import { Link } from "react-router-dom";

function AppCard({ app }) {

  // download count format function
  const formatDownloads = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M+";
    } 
    else if (num > 1000) {
      return (num / 1000).toFixed(1) + "K+";
    } 
    else {
      return num;
    }
  };

  return (
    <Link 
      to={`/apps/${app.id}`} 
      className="card w-full h-full bg-base-100 shadow-xl image-full hover:scale-[1.03] transition-all duration-300 overflow-hidden"
    >
      <figure>
        <div 
          className="absolute top-0 left-0 w-full h-full bg-primary/20" 
          style={{
            backgroundImage: `url(${app.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>

          </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm"></div>
      </figure>

      <div className="card-body p-4 justify-between text-white relative z-10">
        
        <div className="flex items-start gap-3">
          <div className="avatar">
            <div className="w-12 h-12 bg-white rounded-lg p-1 shadow">
              <img src="https://via.placeholder.com/100" alt={app.title} className="rounded-md object-cover"/>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="card-title text-lg font-bold line-clamp-2">{app.title}</h2>
            <p className="text-xs text-white/80">{app.companyName}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          
          <div className="flex flex-col items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-4 h-4 text-yellow-400" >
              <path 
                fillRule="evenodd" 
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 
                5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 
                3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 
                1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425
                l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305
                l5.404-.434 2.082-5.005Z" 
                clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold">{app.ratingAvg.toFixed(1)}</span>
          </div>

          <div className="flex flex-col items-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-4 h-4 text-info"   >
              <path 
                fillRule="evenodd" 
                d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.188-3.187a.75.75 
                0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 
                0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.188 
                3.188V3a.75.75 0 0 1 .75-.75ZM6 
                15.75a.75.75 0 0 1 .75.75v3.75a1.5 
                1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 
                1.5-1.5v-3.75a.75.75 0 0 1 1.5 
                0v3.75a3 3 0 0 1-3 3h-6a3 3 0 
                0 1-3-3v-3.75a.75.75 0 0 1 
                .75-.75Z" 
                clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold">{formatDownloads(app.downloads)}</span>
          </div>

        </div>
      </div>
    </Link>
  );
}

export default AppCard;
