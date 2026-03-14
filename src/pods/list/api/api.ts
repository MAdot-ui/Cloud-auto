import { Member } from "./api.model";

export const getMembers = async (): Promise<Member[]> => {
  return fetch(`https://api.github.com/orgs/lemoncode/members`).then(
    (response) => response.json()
  );
};

export const getMembersByOrganization = async (
  organization: string
): Promise<Member[]> => {
  return fetch(`https://api.github.com/orgs/${organization}/members`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`Organization '${organization}' not found`);
      }
      return response.json();
    }
  );
};
