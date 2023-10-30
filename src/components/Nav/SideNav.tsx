import Link from "next/link";
import React from "react";

const SideNav = () => {
  return (
    <div className="border-r-2 border-red-400 p-3">
      <div className="font-semibold  p-4 m-2 bg-blue-gray-200 rounded-lg cursor-pointer  ">
        <Link href="/">채용공고</Link>
      </div>
      <div className="font-semibold  p-4 m-2 bg-blue-gray-200 rounded-lg cursor-pointer  ">
        <Link href="/">뉴스</Link>
      </div>
      <div className="font-semibold  p-4 m-2 bg-blue-gray-200 rounded-lg cursor-pointer  ">
        <Link href="/">사이드프로젝트</Link>
      </div>
      <div className="font-semibold  p-4 m-2 bg-blue-gray-200 rounded-lg cursor-pointer  ">
        <Link href="/">스터디</Link>
      </div>
      <div className="font-semibold  p-4 m-2 bg-blue-gray-200 rounded-lg cursor-pointer  ">
        <Link href="/">커뮤니티</Link>
      </div>
    </div>
  );
};

export default SideNav;
