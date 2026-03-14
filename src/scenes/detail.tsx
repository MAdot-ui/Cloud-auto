import { DetailPod } from "../pods/detail";
import React from "react";
import { useParams } from "@tanstack/react-router";

export const DetailScene: React.FC = () => {
  const { login } = useParams({ from: "/layout/detail/$login" });
  return <DetailPod login={login} />;
};
