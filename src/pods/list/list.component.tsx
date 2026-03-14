import React from "react";
import * as vm from "./list.vm";
import { Member, TableHeader, Search } from "./components";

interface Props {
  members: vm.Member[];
  organization: string;
  onOrganizationChange: (org: string) => void;
  onSearch: () => void;
  isLoading: boolean;
}

export const List: React.FC<Props> = (props) => {
  const { members, organization, onOrganizationChange, onSearch, isLoading } =
    props;

  return (
    <div>
      <Search
        organization={organization}
        onOrganizationChange={onOrganizationChange}
        onSearch={onSearch}
        isLoading={isLoading}
      />
      <div className="list-user-list-container">
        <TableHeader />
        {members.map((member) => (
          <Member key={member.id} data={member} />
        ))}
      </div>
    </div>
  );
};
