import * as React from "react";
import { Container, Row } from "reactstrap";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Row className="mt-5 mb-2">
        <h4 className="h6">Create Demand</h4>
        <p className="text-muted">
          Search the product you need here. Use tags to find any alternative.
        </p>
      </Row>
      {children}
    </Container>
  );
};

export default Layout;
