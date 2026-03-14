import { MemberDetail } from "./api.model";

export const getMemberDetail = async (id: string): Promise<MemberDetail> => {
  return fetch(`https://api.github.com/users/${id}`).then((response) =>
    response.json()
  );
};
