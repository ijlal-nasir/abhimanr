import React from "react";
import { Badge } from "reactstrap";

type Props = {
  children: React.ReactNode;
};

const BlueChip: React.FC<Props> = ({ children }) => {
  return (
    <Badge
      color="link"
      className="me-2"
      style={{
        color: "#43c6ff",
        background: "#dbf4ff",
      }}
    >
      {children}
    </Badge>
  );
};

const WhiteChip: React.FC<Props> = ({ children }) => {
  return (
    <Badge color="link" className="me-4 text-secondary fw-normal">
      {children}
    </Badge>
  );
};

export { BlueChip, WhiteChip };
