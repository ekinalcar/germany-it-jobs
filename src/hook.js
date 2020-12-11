import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchJobs = async () => {
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
    fetchJobs();
  }, []);

  return { jobs, isLoading, error };
};

export default useFetch;
