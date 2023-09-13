"use client";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";

const QuillWrapper = dynamic(() => import("@/components/Editor/Editor"), {
  loading: () => <p>Loading ...</p>,
  ssr: false,
});

const Project = () => {
  return <QuillWrapper />;
};

export default Project;
