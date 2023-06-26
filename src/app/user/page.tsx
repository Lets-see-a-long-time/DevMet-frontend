"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import { getUserList } from "../api/userAPI";
import { UserTypes } from "@/types/UserTypes";
import Search from "@/components/Search";
import { useQuery } from "react-query";

function UserTable() {
  // const { data } = useQuery({
  //   queryKey: ["userData"],
  //   queryFn: getUserList,
  // });
  const [data, setData] = useState<UserTypes[]>();

  useEffect(() => {
    getUserList().then((res) => setData(res.data));
  }, []);
  return (
    <>
      <Search userData={data} />
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-48 h-32">유저이름</th>
            <th className="w-48 h-32">유저ID</th>
            <th className="w-48 h-32">유저이메일</th>
            <th className="w-48 h-32">유저이미지</th>
            <th className="w-48 h-32">닉네임</th>
            <th className="w-48 h-32">역할</th>
            <th className="w-48 h-32">스택</th>
            <th className="w-48 h-32">프로바이더</th>
            <th className="w-48 h-32">프로젝트</th>
            <th className="w-48 h-32">생성날짜</th>
            <th className="w-48 h-32">변경날짜</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((el) => {
            return (
              <>
                <tr key={el.id}>
                  <td className="w-48 h-32 text-center">{el.name}</td>
                  <td className="w-48 h-32 text-center">{el.id}</td>
                  <td className="w-48 h-32 text-center">{el.email}</td>
                  <td className="w-48 h-32 text-center">
                    <img
                      className="w-48 h-32"
                      src={el.image}
                      alt="회원이미지"
                    ></img>
                  </td>
                  <td className="w-48 h-32 text-center">{el.nickname}</td>
                  <td className="w-48 h-32 text-center">{el.role}</td>
                  <td className="w-48 h-32 text-center">{el.stack}</td>
                  <td className="w-48 h-32 text-center">{el.provider}</td>
                  <td className="w-48 h-32 text-center">{el.projects}</td>
                  <td className="w-48 h-32 text-center">{el.createdAt}</td>
                  <td className="w-48 h-32 text-center">{el.updatedAt}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default UserTable;
