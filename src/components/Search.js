import React, { useState } from "react";

import { useResultContext } from "../context/ResultsContextProvider";
import { Links } from "./Links";

const Search = () => {
  const { setSearchTerm } = useResultContext();
  const [text, setText] = useState("");

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:mt-6 mt-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchTerm(text);
        }}>
        <input
          value={text}
          type="text"
          className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
          placeholder="🔎 Search Google or type URL"
          onChange={(e) => setText(e.target.value)}
        />
        {text !== "" && (
          <button
            type="button"
            className="absolute top-1.5 right-4 text-2xl text-gray-500 "
            onClick={() => setText("")}>
            x
          </button>
        )}
        <Links />
      </form>
    </div>
  );
};
export default Search;
