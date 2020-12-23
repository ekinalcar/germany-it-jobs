import { useState, useEffect } from "react";

const useFetch = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    let resultCount = 1;
    let page = 0;
    let allJobs = [];

    while (resultCount > 0) {
      try {
        const res = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            `https://jobs.github.com/positions.json?page=${page}&location=Germany`
          )}`
        );
        const json = await res.json();
        allJobs.push(...JSON.parse(json.contents));
        resultCount = JSON.parse(json.contents).length;
        page++;
      } catch (error) {
        setError(error);
      }
    }
    setJobs(allJobs);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { jobs, error };
};

export default useFetch;
