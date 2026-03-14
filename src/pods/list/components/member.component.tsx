import React from "react";
import { Link } from "react-router-dom";
import * as vm from "../list.vm";
import { routes } from "../../../router";

interface Props {
  data: vm.Member;
}

export const Member: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <>
      <img src={data.avatarUrl} />
      <span>{data.id}</span>
      <Link to={routes.detail(data.login)}>{data.login}</Link>
    </>
  );
};
