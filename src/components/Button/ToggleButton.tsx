import React from "react";

const ToggleButton = () => {
  return (
    <div className="w-[218px] h-10 rounded-2xl border border-[#EFEFEF] ">
      <button className="border border-[#1890FF] bg-[#EAF8FE] text-[#1890FF] w-1/2 h-full rounded-2xl">
        모집중
      </button>
      <button className="pl-3">모집완료</button>
    </div>
  );
};

export default ToggleButton;
