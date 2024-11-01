import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const WelcomePage = () => {
  const [username, setUsername] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    setProfileData(null);
    if (!username) {
      setError('Please enter a GitHub username');
      return;
    }
    
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setProfileData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-[#0d0c1d] via-[#16142a] to-[#0d0c1d] text-white flex items-center justify-center overflow-hidden">
      {/* Moving Neon Circles */}
      <div className="absolute w-72 h-72 bg-[#08fdd8] opacity-20 rounded-full blur-xl animate-pulse left-10 top-1/3"></div>
      <div className="absolute w-64 h-64 bg-[#ff0099] opacity-20 rounded-full blur-2xl animate-pulse right-10 bottom-1/4"></div>

      {/* Main Content */}
      <div className="text-center px-8 z-10">
        {/* Welcome Text */}
        <h1 className="text-6xl font-extrabold tracking-widest neon-text glow-text shadow-md">
          Welcome to the HubFinder </h1>
        <p className="mt-4 text-xl text-[#08fdd8] font-light neon-text glow-text">
          Explore the limitless possibilities with us.
        </p>

        {/* GitHub Search Form */}
        <div className="mt-10 neon-input-wrapper relative">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="w-full p-4 rounded-full text-center bg-[#16142a] border-[2px] border-[#08fdd8] text-white placeholder-[#08fdd8] focus:outline-none focus:ring-4 focus:ring-[#08fdd8] focus:ring-opacity-50"
          />
          <button
            onClick={handleSearch}
            className="mt-4 w-full py-3 rounded-full bg-[#08fdd8] text-[#16142a] font-bold tracking-wider uppercase transform transition-transform hover:scale-105 focus:outline-none glow-text shadow-lg"
          >
            Search GitHub Profile
          </button>
        </div>

        {/* Display GitHub Profile Data */}
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {profileData && (
          <div className="mt-6 text-center">
            <img src={profileData.avatar_url} alt={`${profileData.login}'s avatar`} className="w-24 h-24 rounded-full mx-auto" />
            <h2 className="text-2xl font-semibold mt-2">{profileData.name || profileData.login}</h2>
            <p className="text-sm text-[#08fdd8]">@{profileData.login}</p>
            <p className="mt-2">{profileData.bio}</p>
            <a
              href={profileData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[#08fdd8] hover:text-[#ff0099] transition-all duration-300"
            >
              View GitHub Profile
            </a>
          </div>
        )}

        {/* Navigation Links */}
        <div className="mt-12 space-y-4 text-[#08fdd8]">
          <Link to="/work-in-progress/about" className="block hover:underline">
            Learn More About Us
          </Link>
          <Link to="/work-in-progress/services" className="block hover:underline">
            Discover Our Services
          </Link>
          <Link to="/work-in-progress/contact" className="block hover:underline">
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-[#08fdd8] opacity-5 pointer-events-none animate-flicker"></div>
    </div>
  );
};

export default WelcomePage;
