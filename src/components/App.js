import React from "react";
import { map } from "lodash";
import LazyLoad from "react-lazyload";

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
        <Title count={jobs.length} />
        {error.length > 0 && <p>ERROR ...</p>}
        {jobs?.length === 0 ? (
          <Loader />
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
            {map(jobs, (job, i) => (
              <LazyLoad once={job.once} key={i} height={150} offset={[-150, 0]}>
                <Job job={job} />
              </LazyLoad>
            ))}
          </div>
        )}

        <ScrollTop />
      </div>
    </>
  );
};

export default App;
