import { registerUser } from "@/app/api/registerAPI";
import { AuthTypes, HeaderTypes, RegisterTypes } from "@/types/AuthTypes";
import { useRouter } from "next/router";

import React, { useState, useCallback } from "react";

//커스텀 input에 어떤 타입을 지정해주면 좋을까?
// 일단 input이 어떤 데이터를 받을지 먼저 정해졌을 때 타입을 정하면 되지 않을까?
export const useInput = (states: AuthTypes) => {
  const [values, setValue] = useState(states);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
    console.log(values);
  };

  const onSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    url: string,
    token: string
  ) => {
    e.preventDefault();
    if (url.includes("register")) {
      registerUser({ ...values }, token);
    }
  };

  return { values, onChange, onSubmit };
};
