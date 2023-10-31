"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Banner from "./Skeleton/Banner";
import { Typography } from "@material-tailwind/react";
import AnnouncementSkelton from "./Skeleton/AnnouncementSkelton";

const Main = () => {
  const { data: session } = useSession();
  console.log("session", session);

  // {session ? (
  //   'session 있어요'
  // ) : (
  //   <>
  //     <Link href={'/auth'}>로그인하자 세션이 없으니</Link>
  //   </>
  // )}
  return (
    <div className="flex flex-col  w-full h-screen m-10">
      <Banner />
      <div className="flex mt-6">
        <div className="">
          <Typography>최근 Hot🔥한 공고</Typography>
          <div>지원자가 많이 몰리고 있으니 늦지 않게 공고를 확인해보세요</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-9">
            <AnnouncementSkelton />
            <AnnouncementSkelton />
            <AnnouncementSkelton />
            <AnnouncementSkelton />
            <AnnouncementSkelton />
            <AnnouncementSkelton />
          </div>
        </div>
        <div>
          <Typography>신규 등록된 공고</Typography>
          <div>
            지원자가 많이 몰리고 있으니 늦지 않게 공고를 확인해보세요!!!!
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnnouncementSkelton />
            <AnnouncementSkelton />
            <AnnouncementSkelton />
            <AnnouncementSkelton />
            <AnnouncementSkelton />
            <AnnouncementSkelton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
