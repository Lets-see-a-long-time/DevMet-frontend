import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { Button } from "@material-tailwind/react";
const imageHandler = () => {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();
  // input.addEventListener("change", async () => {
  //   if (input.files && input.files.length > 0) {
  //     const file = input.files[0];
  //     try {
  //       const res = await imageApi({ img: file });
  //       const imgUrl = res.data.imgUrl;
  //       const editor = quillRef.current.getEditor();
  //       const range = editor.getSelection();
  //       editor.insertEmbed(range.index, "image", imgUrl);
  //       editor.setSelection(range.index + 1);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     alert("파일을 선택하지 않았습니다.");
  //   }
  // });
};
const Editor = () => {
  const [html, setHtml] = useState("");
  const quillRef = useRef(null);
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
          ["image"],
        ],
        // handlers: { image: imageHandler },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "align",
    "image",
  ];

  return (
    <div>
      <ReactQuill
        ref={quillRef}
        onChange={setHtml}
        modules={modules}
        formats={formats}
        value={html}
        placeholder={"작성할 내용을 입력해주세요!"}
        theme="snow"
      />
      {/* react-material로 만든 컴포넌트는 use client를 사용해줘야함.. 어떻게 할지 고민. 
        
      */}
      <Button>게시글 만들기</Button>
    </div>
  );
};

export default Editor;
