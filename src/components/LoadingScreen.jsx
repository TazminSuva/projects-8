import React from "react";

function LoadingScreen({ logoSrc, isLoading }) {

  if(!isLoading){
    return null;
  }

  return (
    <div className="fixed inset-0 bg-white flex flex-col justify-center items-center z-[9999]">
      
      {logoSrc ? (
        <img 
          src={logoSrc} 
          alt="Loading..." 
          className="w-24 h-24 mb-4 animate-pulse"
        />
      ) : (
        <p className="text-red-500">⚠️ Logo not found!</p>
      )}

      <p className="text-gray-600 text-lg font-medium animate-pulse">
        Loading...
      </p>

      <div 
        className="w-8 h-8 mt-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin">
      </div>
      
    </div>
  );
}

export default LoadingScreen;
