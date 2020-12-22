import React from "react";
import { map } from "lodash";

import Header from "./Header";
import Title from "./Title";
import Loader from "./Loader";
import Job from "./Job";
import useFetch from "../hooks/useFetch";
import ScrollTop from "./ScrollTop";

const App = () => {
  const { jobs, error } = useFetch();
  return (
    <>
      <Header />
      <div className="sm:container sm:mx-auto px-6 pb-20">
        <Title />
        {error && <p>ERROR ...</p>}
        {jobs?.length === 0 ? (
          <Loader />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
            {map(jobs, (job, i) => (
              <Job job={job} key={i} />
            ))}
          </div>
        )}

        <ScrollTop />
      </div>
    </>
  );
};

export default App;
