import React, { useEffect, useState } from "react";
import axios from "axios";
import { map } from "lodash";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGithub = async () => {
    let resultCount = 1;
    let page = 0;
    const allJobs = [];

    while (resultCount > 0) {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            `https://jobs.github.com/positions.json?page=${page}&location=Germany`
          )}`
        );

        const {
          data: { contents },
        } = response;

        allJobs.push(...JSON.parse(contents));
        resultCount = JSON.parse(contents).length;
        page++;
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }

    setJobs(allJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchGithub();
  }, []);
  console.log(jobs);
  return (
    <div className="sm:container sm:mx-auto p-5">
      {error && <p>ERROR ...</p>}
      {isLoading && <p>IS LOADING...</p>}
      {jobs?.length > 0 && (
        <div class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 gap-5 ">
          {map(jobs, (job, i) => (
            <div
              key={i}
              className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-20 w-full object-contain md:w-20"
                    src={job.company_logo}
                    alt="Man looking at item at a store"
                  />
                </div>
                <div className="px-2 py-4">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {job.title}
                  </div>
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                  >
                    {job.company}
                  </a>
                  <p className="mt-2 text-gray-500"></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
