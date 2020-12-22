import { useState, useEffect } from "react";

const useFetch = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
    for (let i = 0; i <= 5; i++) {
      fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://jobs.github.com/positions.json?page=${i}&location=Germany`
        )}`
      )
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error("Network response was not ok.");
        })
        .then((data) => {
          setIsLoading(true);
          let allJobs = [];
          if (JSON.parse(data.contents).length > 0) {
            allJobs.push(...JSON.parse(data.contents));
            setJobs(allJobs);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
        });
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  return { jobs, isLoading, error };
};

export default useFetch;
