import React from "react";
import Search from "../Input/Search";

function TopNav() {
  return (
    <div className="h-14 p-10 flex items-center border-b border-gray-400">
      <div className="text-2xl font-bold">De:Met</div>
      <Search />
    </div>
  );
}
export default TopNav;
