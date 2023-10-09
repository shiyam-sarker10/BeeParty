import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
      <div className="flex flex-col h-[100vh] justify-center items-center space-y-6">
        <div>
          <img
            className="w-[600px]"
            src="../../src/assets/r404.gif"
            alt="eeoor"
          />
        </div>
        <h1 className="text-5xl font-custom text-gray-900 md:w-1/2 text-center">
          This page got In the realm of mystery
        </h1>
        <Link to="/">
          <button className="bg-[#F08A24] px-6 text-2xl text-white py-2 rounded-lg font-custom">
            Go Back
          </button>
        </Link>
      </div>
    );
};

export default Error;