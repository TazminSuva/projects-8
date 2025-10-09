import React from 'react';
import App from '../App';
import notFoundImage from '../assets/assets/App-Error.png';
import heroLogo from '../assets/assets/logo.png';

export default function ErrorPage() {
  // simple go back function
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

          <div className="flex items-center space-x-2">
            <img src={heroLogo} alt="HERO.IO Logo" className="h-7 w-auto" />
            <h1 className="text-xl font-bold text-gray-800">HERO.IO</h1>
          </div>

          <nav className="hidden md:flex space-x-6 text-gray-600">
            <a href="/" className="hover:text-indigo-600 font-medium transition duration-150">Home</a>
            <a href="/apps" className="hover:text-indigo-600 font-medium transition duration-150">Apps</a>
            <a href="/installation" className="hover:text-indigo-600 font-medium transition duration-150">Installation</a>
          </nav>

          <a
            href="https://github.com/TazminSuva"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-600 text-white font-semibold text-sm rounded-md hover:bg-purple-700 transition flex items-center shadow-md"
          >
            Contribute
          </a>

        </div>
      </header>

      {/* main content */}
      <main className="flex-grow flex flex-col justify-center items-center p-6 text-center">

        <div className="mb-8 max-w-xs sm:max-w-sm">
          <img src={notFoundImage} alt="App Not Found Illustration" className="w-full h-auto" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          OOPS!! APP NOT FOUND
        </h1>

        <p className="text-gray-500 mb-8 max-w-md text-lg">
          The app you are looking for is not found in our system. Please try another app.
        </p>

        <button
          onClick={goBack}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.02]"
        >
          Go Back!
        </button>

      </main>

      {/* footer */}
      <footer className="bg-gray-900 text-white pt-6 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center pb-4 border-b border-gray-700/50 mb-4">
            <div className="flex items-center space-x-2">
              <div className="text-base font-semibold text-white">HERO.IO</div>
            </div>
            <div className="text-sm font-medium text-gray-400">
              Social Links
            </div>
          </div>

          <div className="text-center text-xs text-gray-400">
            Copyright &copy; 2025 - All rights reserved
          </div>

        </div>
      </footer>

    </div>
  );
}
