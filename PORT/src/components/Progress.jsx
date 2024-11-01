import React from 'react';
import { Link, useParams } from 'react-router-dom';

const WorkInProgress = () => {
  const { title } = useParams();

  return (<>
    <div className="relative w-full h-screen bg-gradient-to-r from-[#0d0c1d] via-[#16142a] to-[#0d0c1d] text-white flex items-center justify-center overflow-hidden">
    {/* Moving Background Circles */}
      <div className="absolute w-72 h-72 bg-[#08fdd8] opacity-20 rounded-full blur-xl animate-pulse left-10 top-1/3"></div>
      <div className="absolute w-64 h-64 bg-[#ff0099] opacity-20 rounded-full blur-2xl animate-pulse right-10 bottom-1/4"></div>

      
      {/* Main Content */}
      <div className="text-center px-8 z-10">
        <h1 className="text-6xl font-extrabold tracking-widest neon-text glow-text shadow-md">
          Work in Progress
        </h1>
        <p className="mt-4 text-xl text-[#08fdd8] font-light neon-text glow-text">
          The <span className='text-[#ff0099]'>"{title.toLocaleUpperCase()}" </span>
          section is currently under development.
        </p>
        <p className="my-4 text-xl text-[#08fdd8] font-light neon-text glow-text">
          Stay tuned for more exciting updates!
        </p>
        <button className="w-full p-4 rounded-full text-center bg-[#16142a] border-[2px] border-[#08fdd8] text-white placeholder-[#08fdd8] focus:outline-none focus:ring-4 focus:ring-[#08fdd8] focus:ring-opacity-50 hover:bg-[#ff0099] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
        <Link to="/welcome" className="block" >Go Back to Home</Link>
        </button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-[#08fdd8] opacity-5 pointer-events-none animate-flicker"></div>
    </div>

      <style>{`
        
      `}</style>
    </>
  );
};

export default WorkInProgress;
