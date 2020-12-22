import React from "react";

const Job = ({ job }) => (
  <a
    href={job.url}
    target="_blank"
    rel="noreferrer"
    className="outline-none block transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl bg-gray-50 p-2"
  >
    <div className="md:flex">
      <div className="md:flex-shrink-0">
        <img
          className="md:h-20 md:w-20 object-contain hidden md:block"
          src={job.company_logo}
          alt={job.company}
        />
      </div>
      <div className="px-5">
        <div className="tracking-wide text-sm text-indigo-500 font-semibold">
          {job.title}
        </div>
        <p className="mt-1 text-sm leading-tight font-medium text-black hover:underline">
          {job.company}
        </p>
        <p className="mt-2 text-sm text-gray-500">{job.location}</p>
        <p className="mt-2 text-sm text-gray-500">{job.created_at}</p>
      </div>
    </div>
  </a>
);

export default Job;
