import React from "react";
import { Badge } from "reactstrap";

type Props = {
  children: React.ReactNode;
  classes?: string;
  handleOnClick?: () => void;
};

const BlueChip: React.FC<Props> = ({ children, classes }) => {
  return (
    <Badge
      color="link"
      className={`me-2 ${classes}`}
      style={{
        color: "#43c6ff",
        background: "#dbf4ff",
      }}
    >
      {children}
    </Badge>
  );
};

const WhiteChip: React.FC<Props> = ({ children, handleOnClick }) => {
  return (
    <Badge
      color="link"
      className="me-4 text-secondary fw-normal"
      onClick={handleOnClick}
      style={{
        cursor: "pointer",
      }}
    >
      {children}
    </Badge>
  );
};

export { BlueChip, WhiteChip };
