"use client";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useMemo, useRef, useState, useEffect } from "react";
import { getProjects } from "../api/projectApi";

const QuillWrapper = dynamic(() => import("react-quill"), {
  loading: () => <p>Loading ...</p>,
  ssr: false,
});

const Project = () => {
  // const { data } = useQuery(["project"], () => {
  //   getProjects();
  // });

  // console.log("data", data);

  useEffect(() => {
    getProjects().then((res) => console.log(res));
  }, []);

  return <QuillWrapper theme="snow" />;
};

export default Project;
