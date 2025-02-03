import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center relative">
      <div className="absolute w-32 h-32 bg-blue-500 opacity-30 rounded-full blur-xl animate-ping"></div>
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute w-full h-full border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
      </div>
      <p className="text-white text-lg font-semibold">You could take this moment to follow <a href="https://twitter.com/ismaspliter" className="text-blue-400 hover:text-blue-500" target="_blank" rel="noopener noreferrer">@ismaspliter</a></p>
      
    </div>
  );
};

export default LoadingAnimation;