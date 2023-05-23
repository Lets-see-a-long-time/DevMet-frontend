import React from "react";
import getQueryClient from "../getQueryClient";

export default async function HydrateUser() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery([]);
  return <div></div>;
}
