import React from "react";
import ProjectStatusChip from "../Chip/ProjectStatusChip";
import PositionChip from "../Chip/PositionChip";
import HashtagChip from "../Chip/HashtagChip";

const AnnouncementArticle = () => {
  return (
    <div className="border border-[#EFEFEF] h-[200px] rounded-t-lg pt-[20px] pr-[40px] pb-[20px] pl-[40px] mt-3 mb-3 hover:transform hover:scale-105 hover:shadow-md transition-transform transition-shadow">
      <div className="flex items-center">
        <ProjectStatusChip type={"모집중"} />
        닉네임
        <PositionChip position="프로덕트 디자이너" />
        {/* 임시 */}
        <div className="mr-2 ml-2 bg-[#E6E6E6] rounded-md pt-[5px] pb-[5px] pl-2 pr-2">
          2년차
        </div>
      </div>
      <div className="mt-6">
        <div className="text-base font-semibold">
          사이드 프로젝트 팀원 모집중
        </div>
        <div className="text-[#818181] mt-[15px]">
          안녕하세요!!사이드 프로젝트 하실 프론트엔드 개발자/취준생 2명
          구합니다! 기간은 약 한달~두달정도 예상하고 있습니다. ...
        </div>
      </div>
      <div className="mt-[20px]">
        <HashtagChip title="친목" color="#EAF8FE" />
      </div>
    </div>
  );
};

export default AnnouncementArticle;
