import React from "react";

// 해시태그를 어떤식으로 만들어볼까?
// 1. 해시태그를 만들 때 마다 랜덤 색상을 배정해준다.
// 2. 해시태그의 숫자를 제한, 순서와 색상을 정해놓는다.
const HashtagChip = ({ color, title }: { color: string; title: string }) => {
  return (
    <div
      className={`bg-[${color}] pt-[5px] pb-[5px] pl-2 pr-2 w-[45px] h-6 gap-1 text-xs whitespace-nowrap`}
    >{`#${title}`}</div>
  );
};

export default HashtagChip;
