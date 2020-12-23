import { useState, useEffect } from "react";

const useFetch = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
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
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { jobs, error };
};

export default useFetch;
