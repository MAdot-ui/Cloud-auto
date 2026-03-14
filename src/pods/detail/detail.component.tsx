import React from "react";
import { Link } from "react-router-dom";
import { MemberDetail } from "./detail.vm";

interface Props {
  member: MemberDetail;
}

export const Detail: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <div className="detail-container">
      <div className="detail-back-button-container">
        <Link to="/list" className="detail-back-button">
          ← Back to List
        </Link>
      </div>

      <h2>Member Details</h2>
      <div className="detail-member-info">
        <img
          src={member.avatarUrl}
          alt={member.login}
          className="detail-avatar"
        />
        <div>
          <h3>{member.name || member.login}</h3>
          <p className="detail-member-name">@{member.login}</p>
        </div>
      </div>

      <div className="detail-fields">
        <p>
          <strong>ID:</strong> {member.id}
        </p>
        <p>
          <strong>Login:</strong> {member.login}
        </p>
        {member.name && (
          <p>
            <strong>Name:</strong> {member.name}
          </p>
        )}
        {member.org && (
          <p>
            <strong>Company:</strong> {member.org}
          </p>
        )}
        {member.bio && (
          <p>
            <strong>Bio:</strong> {member.bio}
          </p>
        )}
      </div>
    </div>
  );
};
