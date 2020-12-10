import React, { useEffect, useState } from "react";
import axios from "axios";
import { map, filter } from "lodash";

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
    <div>
      {isLoading && <p>IS LOADING...</p>}
      {jobs?.length > 0 && map(jobs, (job, i) => <p key={i}>{job.title}</p>)}
    </div>
  );
};

export default App;
