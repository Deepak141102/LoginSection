import React from 'react';

const WelcomePage = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-[#240f36] to-[#08fdd8] text-white flex items-center justify-center overflow-hidden">
      {/* Moving Neon Circles */}
      <div className="moving-neon-circle circle-1"></div>
      <div className="moving-neon-circle circle-2"></div>

      {/* Main Content */}
      <div className="text-center px-4">
        {/* Welcome Text */}
        <h1 className="text-6xl font-extrabold neon-text animate-bounce">
          Welcome to the Future
        </h1>
        <p className="mt-4 text-xl font-light neon-text opacity-80">
          Explore the limitless possibilities with us.
        </p>

        {/* Input Form */}
        <div className="mt-8 neon-input-wrapper">
          <input
            type="text"
            placeholder="Enter your email"
            className="neon-input p-3 rounded-lg bg-transparent border-2 border-[#08fdd8] placeholder:text-[#08fdd8] focus:outline-none focus:ring-2 focus:ring-[#08fdd8] transition duration-300"
          />
          <button className="neon-button mt-4 bg-[#08fdd8] text-black px-6 py-3 rounded-lg shadow-lg hover:bg-[#06b1a5] transition duration-300 transform hover:scale-105">
            Join Us
          </button>
        </div>

        {/* Navigation Links */}
        <div className="mt-12 space-y-4 text-[#08fdd8]">
          <a href="#about" className="block hover:underline">
            Learn More About Us
          </a>
          <a href="#services" className="block hover:underline">
            Discover Our Services
          </a>
          <a href="#contact" className="block hover:underline">
            Get in Touch
          </a>
        </div>
      </div>
      <style>{`/* styles.css */
.moving-neon-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(8, 253, 216, 0.5);
  animation: move 10s linear infinite;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 400px;
  height: 400px;
  top: 50%;
  right: 15%;
  animation-delay: 2s;
}

@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(30px, 30px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.neon-text {
  text-shadow: 0 0 5px #08fdd8, 0 0 10px #08fdd8, 0 0 20px #08fdd8;
}

.neon-input {
  border: 2px solid #08fdd8;
  background-color: rgba(0, 0, 0, 0.5);
  color: #08fdd8;
  transition: all 0.3s ease;
}

.neon-button {
  background-color: #08fdd8;
  color: black;
  transition: all 0.3s ease;
}
`}</style>
    </div>
  );
};

export default WelcomePage;
