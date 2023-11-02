import React from "react";

const PositionChip = ({ position }: { position: string }) => {
  return (
    <div className="pt-[5px] pb-[5px] pr-2 pl-2 gap-1 mr-2 ml-2 bg-[#E6E6E6] rounded-md text-[#1890FF]">
      {position}
    </div>
  );
};

export default PositionChip;
