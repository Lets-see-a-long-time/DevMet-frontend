"use client";
import { SearchProps } from "@/types/UserTypes";
import React from "react";
import { useEffect, useCallback, useState } from "react";

const Search = (userData: SearchProps) => {
  const [searchData, setSearchData] = useState("");
  const handleChange = useCallback(() => {
    setSearchData(searchData);
    console.log("검색중...");
  }, [searchData]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="border-2 border-black w-64 h-11">
      <input
        type="text"
        onChange={handleChange}
        className="border-2 border-black w-44 "
      />
      <button type="button" className="border-2 border-black">
        검색
      </button>
    </form>
  );
};

export default Search;
