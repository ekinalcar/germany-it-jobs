import React from "react";
import { map } from "lodash";
import { links } from "../data/links";

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
      {map(links, ({ id, name, src, href }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="outline-none mx-1"
        >
          <img
            className={`rounded-full w-8 h-8 border-2 border-transparent hover:border-indigo-400 ${
              name === "Twitter" && "bg-black"
            }`}
            src={src}
            alt={name}
          />
        </a>
      ))}
    </div>
  </header>
);

export default Header;
