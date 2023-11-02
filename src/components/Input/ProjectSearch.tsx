import React from "react";
import SearchButton from "../Button/SearchButton";

const ProjectSearch = () => {
  return (
    <div className="flex">
      <input
        className="w-[635px] h-[41px] rounded-2xl border pl-[40px] border-[#EFEFEF] mr-3"
        placeholder="어떤 프로젝트를 찾으세요?"
      />
      <SearchButton />
    </div>
  );
};

export default ProjectSearch;
