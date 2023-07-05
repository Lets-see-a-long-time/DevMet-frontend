import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const QuillWrapper = dynamic(() => import("react-quill"), {
  loading: () => <p>Loading ...</p>,
});

const Project = () => {
  return <QuillWrapper theme="snow" />;
};

export default Project;
