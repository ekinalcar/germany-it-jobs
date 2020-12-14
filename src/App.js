import React from "react";
import { map } from "lodash";

import Header from "./Header";
import Title from "./Title";
import Loader from "./Loader";
import Job from "./Job";
import useFetch from "./hook";

const App = () => {
  const { jobs, isLoading, error } = useFetch();

  return (
    <>
      <Header />
      <div className="sm:container sm:mx-auto p-5">
        <Title />
        {error && <p>ERROR ...</p>}
        {isLoading && <Loader />}
        {jobs?.length > 0 && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
            {map(jobs, (job, i) => (
              <Job job={job} key={i} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
