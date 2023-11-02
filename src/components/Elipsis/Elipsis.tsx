import React from "react";

const Elipsis = ({ type }: { type: string }) => {
  /**
   * @param type : active, inactive
   */
  return (
    <div className="w-[5px] h-[5px] bg-[#1890FF] rounded-[2.5px] mr-[10px]"></div>
  );
};

export default Elipsis;
