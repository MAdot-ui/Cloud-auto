import React from "react";
import { Member } from "./list.vm";
import { List } from "./list.component";
import { getMembersByOrganization } from "./api/api";
import { mapMembersToVM } from "./list.mappers";

export const ListPod: React.FC = () => {
  const [members, setMembers] = React.useState<Member[]>([]);
  const [organization, setOrganization] = React.useState(() => {
    return localStorage.getItem("selectedOrganization") || "lemoncode";
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    loadMembers(organization);
  }, []);

  const loadMembers = async (org: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const membersData = await getMembersByOrganization(org);
      const mappedMembers = mapMembersToVM(membersData);
      setMembers(mappedMembers);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load members");
      setMembers([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    if (organization.trim()) {
      localStorage.setItem("selectedOrganization", organization);
      loadMembers(organization);
    }
  };

  const handleOrganizationChange = (org: string) => {
    setOrganization(org);
    setError(null);
  };

  return (
    <div>
      {error && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            border: "1px solid #f5c6cb",
            borderRadius: "4px",
            marginBottom: "16px",
          }}
        >
          Error: {error}
        </div>
      )}
      <List
        members={members}
        organization={organization}
        onOrganizationChange={handleOrganizationChange}
        onSearch={handleSearch}
        isLoading={isLoading}
      />
    </div>
  );
};
