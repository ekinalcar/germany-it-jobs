import React from "react";

const Loader = () => (
  <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
    <div className="text-indigo-600 absolute top-1/2 left-1/2 -mt-32 -ml-32">
      <i className="block animate-spin h-5 w-5 border border-indigo-600 rounded m-auto"></i>
      <p className="mt-5">Lütfen az daha bekleyiniz...</p>
    </div>
  </div>
);

export default Loader;
