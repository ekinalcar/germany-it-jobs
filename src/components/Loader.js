import React from "react";

const Loader = () => (
  <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
    <div className="text-indigo-600 absolute top-1/2 left-1/2 -mt-30 -ml-32">
      <svg
        className="w-6 h-6 animate-spin mx-auto"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <p className="mt-2">Lütfen az daha bekleyiniz...</p>
    </div>
  </div>
);

export default Loader;