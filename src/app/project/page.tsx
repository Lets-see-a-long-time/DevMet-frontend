import AnnouncementArticle from "@/components/Announcement/AnnouncementArticle";
import ToggleButton from "@/components/Button/ToggleButton";
import Elipsis from "@/components/Elipsis/Elipsis";
import ProjectSearch from "@/components/Input/ProjectSearch";
import PopularNav from "@/components/Nav/PopularNav";
import React from "react";

const ProjectPage = () => {
  return (
    <div className="mt-[40px] ml-[220px] ">
      <ToggleButton />
      <div className="flex mt-[20px]">
        <ProjectSearch />
        <div className="flex items-center ml-[15px]">
          <Elipsis type="selected" />
          최신순
        </div>
        <div className="flex items-center ml-[15px]">
          <Elipsis type="selected" />
          좋아요순
        </div>
        <div className="flex items-center ml-[15px]">
          <Elipsis type="selected" />
          댓글순
        </div>
        <div className="flex items-center ml-[15px]">
          <Elipsis type="selected" />
          조회순
        </div>
      </div>
      <div className="w-[980px] mt-6 flex flex-col">
        <AnnouncementArticle />
        <AnnouncementArticle />
        <AnnouncementArticle />
        <AnnouncementArticle />
        <PopularNav />
      </div>
    </div>
  );
};

export default ProjectPage;
