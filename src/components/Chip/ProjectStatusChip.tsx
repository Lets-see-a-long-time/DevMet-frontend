import React from "react";

const ProjectStatusChip = ({ type }: { type: string }) => {
  return (
    // type으로 분기처리..
    <div className="w-[62px] h-[24px] mr-2 ml-2 pt-2 pb-2 pl-4 pr-4 rounded-xl bg-[#B7B7B7] text-xs flex items-center justify-center whitespace-nowrap font-semibold">
      모집중
    </div>
  );
};

export default ProjectStatusChip;
