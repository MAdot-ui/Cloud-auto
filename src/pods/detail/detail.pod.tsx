import React from "react";
import { useParams } from "react-router-dom";
import { Detail } from "./detail.component";
import { MemberDetail } from "./detail.vm";
import { getMemberDetail } from "./api/api";
import { mapMemberDetailToVM } from "./detail.mappers";

interface Props {
  login: string;
}

export const DetailPod: React.FC<Props> = (props) => {
  const { login } = props;
  const [member, setMember] = React.useState<MemberDetail>();
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    setIsLoading(true);
    setError(null);

    getMemberDetail(login)
      .then(mapMemberDetailToVM)
      .then(setMember)
      .catch((err) => {
        setError(
          err instanceof Error ? err.message : "Failed to load member details"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [login]);

  if (isLoading) {
    return <div>Loading member details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return member && <Detail member={member} />;
};
