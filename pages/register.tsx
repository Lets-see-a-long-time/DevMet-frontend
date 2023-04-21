import React from "react";

const register = () => {
  return (
    <div>
      <form>
        <input type="text" name="name" placeholder="이름" />
        <input type="text" name="nickname" placeholder="닉네임" />
        <input type="text" name="position" placeholder="포지션" />
        <input type="text" name="stack" placeholder="포지션" />
      </form>
    </div>
  );
};

export default register;
