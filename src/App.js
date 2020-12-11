import React from "react";
import { map } from "lodash";

import Header from "./Header";
import Job from "./Job";
import useFetch from "./hook";

const App = () => {
  const { jobs, isLoading, error } = useFetch();

  return (
    <>
      <Header />
      <div className="sm:container sm:mx-auto p-5">
        <div className="max-w-3xl my-16">
          <h1 className="text-2xl font-medium mb-2">
            Germany IT Jobs from GitHub
          </h1>
          <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">
            A Curated List
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo
            cupiditate molestias atque consequuntur ea quo cumque, odit velit
            sint similique? Asperiores ratione aperiam tempora, alias corrupti
            deleniti quaerat molestiae.
          </p>
        </div>
        {error && <p>ERROR ...</p>}
        {isLoading && <p>IS LOADING...</p>}
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
