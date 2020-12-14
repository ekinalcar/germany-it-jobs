import React from "react";

const Loader = () => (
  <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
    <div className="text-indigo-600 opacity-75 top-1/2 left-1/2 my-0 mx-auto block absolute translate-y-2/4 translate-x-2/4">
      <i className="block animate-spin h-10 w-10 border border-indigo-600 rounded m-auto"></i>
      <p className="mt-5">Fetching Jobs. Please be patient...</p>
    </div>
  </div>
);

export default Loader;
