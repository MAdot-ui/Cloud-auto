import { DetailPod } from "../pods/detail";
import React from "react";
import { useParams } from "react-router-dom";

export const DetailScene: React.FC = () => {
  const { login } = useParams();
  return <DetailPod login={login} />;
};
