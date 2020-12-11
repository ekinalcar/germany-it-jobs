import React, { useEffect, useState } from "react";
import axios from "axios";
import { map } from "lodash";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showMenu, setShowMenu] = useState(false);

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
        console.log(error);
      }
    }

    setJobs(allJobs);
    setIsLoading(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    fetchGithub();
  }, []);

  return (
    <>
      <header className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-2 bg-indigo-500 bg-opacity-50">
        <div className="flex-1 flex justify-between items-center">
          <a href="#">
            <svg
              width="32"
              height="36"
              viewBox="0 0 32 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"></path>
            </svg>
          </a>
        </div>

        <label
          htmlFor="menu-toggle"
          onClick={() => toggleMenu()}
          className="pointer-cursor lg:hidden block"
        >
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <div
          className={`${
            showMenu ? "show" : "hidden"
          } lg:flex lg:items-center lg:w-auto w-full`}
        >
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400"
                  href="#"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2"
                  href="#"
                >
                  Support
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="#"
            className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor"
          >
            <img
              className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400"
              src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg"
              alt="Andy Leverenz"
            />
          </a>
        </div>
      </header>

      <div className="sm:container sm:mx-auto p-5">
        <div className="py-5">
          <div className="max-w-3xl bg-white rounded-lg my-16">
            <h1 className="text-2xl font-medium mb-2">
              Germany IT Jobs from GitHub
            </h1>
            <h2 className="font-medium text-sm text-indigo-400 mb-4 uppercase tracking-wide">
              A Curated List
            </h2>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum illo
            cupiditate molestias atque consequuntur ea quo cumque, odit velit
            sint similique? Asperiores ratione aperiam tempora, alias corrupti
            deleniti quaerat molestiae.
          </div>
        </div>
        {error && <p>ERROR ...</p>}
        {isLoading && <p>IS LOADING...</p>}
        {jobs?.length > 0 && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {map(jobs, (job, i) => (
              <div
                key={i}
                className="transition duration-500 ease-in-out transform hover:scale-105 cursor-pointer max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl bg-gray-50 p-2"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-20 w-full object-contain md:w-20"
                      src={job.company_logo}
                      alt="Man looking at item at a store"
                    />
                  </div>
                  <div className="px-5">
                    <div className="tracking-wide text-sm text-indigo-500 font-semibold">
                      {job.title}
                    </div>
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block mt-1 text-sm leading-tight font-medium text-black hover:underline"
                    >
                      {job.company}
                    </a>
                    <p className="mt-2 text-gray-500">{job.created_at}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
