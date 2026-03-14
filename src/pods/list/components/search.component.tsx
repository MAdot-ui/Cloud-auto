import React from "react";

interface Props {
  organization: string;
  onOrganizationChange: (org: string) => void;
  onSearch: () => void;
  isLoading: boolean;
}

export const Search: React.FC<Props> = ({
  organization,
  onOrganizationChange,
  onSearch,
  isLoading,
}) => (
  <div className="search-container">
    <input
      value={organization}
      onChange={(e) => onOrganizationChange(e.target.value)}
      placeholder="lemoncode"
      className="search-input"
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          onSearch();
        }
      }}
    />
    <button onClick={onSearch} disabled={isLoading} className="search-button">
      {isLoading ? "Loading..." : "Search"}
    </button>
  </div>
);
