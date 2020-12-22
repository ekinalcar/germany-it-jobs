import { useState, useEffect } from "react";

const useFetch = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    let allJobs = [];
    for (let i = 0; i <= 2; i++) {
      try {
        const res = await fetch(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            `https://jobs.github.com/positions.json?page=${i}&location=Germany`
          )}`
        );
        const json = await res.json();
        allJobs.push(...JSON.parse(json.contents));
        setJobs(allJobs);
      } catch (error) {
        setError(error);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { jobs, error, isLoading };
};

export default useFetch;
