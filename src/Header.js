import React from "react";

const Header = () => (
  <header className="p-6 flex items-center py-2 bg-indigo-500 bg-opacity-50">
    <a
      href="https://ekinalcar.com"
      target="_blank"
      rel="noreferrer"
      className="block outline-none hover:text-gray-600"
    >
      https://ekinalcar.com
    </a>

    <div className="flex flex-1 items-center justify-end">
      <a
        href="https://github.com/ekinalcar"
        target="_blank"
        rel="noreferrer"
        className="outline-none"
      >
        <img
          className="rounded-full w-8 h-8 border-2 border-transparent hover:border-indigo-400"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/github.svg"
          alt="GitHub"
        />
      </a>
      <a
        href="https://github.com/ekinalcar"
        target="_blank"
        rel="noreferrer"
        className="ml-4 outline-none"
      >
        <img
          className="rounded-full w-8 h-8 border-2 border-transparent hover:border-indigo-400"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/github.svg"
          alt="GitHub"
        />
      </a>
      <a
        href="https://github.com/ekinalcar"
        target="_blank"
        rel="noreferrer"
        className="ml-4 outline-none"
      >
        <img
          className="rounded-full w-8 h-8 border-2 border-transparent hover:border-indigo-400"
          src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/github.svg"
          alt="GitHub"
        />
      </a>
    </div>
  </header>
);

export default Header;
