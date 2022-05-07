import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Col,
  TabContent,
  TabPane,
  Row,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Input,
} from "reactstrap";
import { WhiteChip } from "../chip/Chip";

type Props = {
  searchProducts: (x: string) => void;
};

const SearchTabs: React.FC<Props> = ({ searchProducts }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleOnChangeInput = (e: React.SyntheticEvent) => {
    const elem = e.target as HTMLInputElement;
    const value = elem.value;
    setSearchTerm(value);
    searchProducts(value);
  };

  return (
    <>
      <Col md={12} className="mt-4">
        <TabContent>
          <TabPane>
            <Row>
              <Col sm={12}>
                <Card>
                  <CardHeader className="bg-white">
                    I'm looking for...
                  </CardHeader>
                  <CardBody>
                    <div className="d-flex justify-content-start">
                      <WhiteChip>Software Development</WhiteChip>
                      <WhiteChip>Daily Business</WhiteChip>
                      <WhiteChip>Graphic Editors</WhiteChip>
                      <WhiteChip>Text Editors</WhiteChip>
                      <WhiteChip>Management Tools</WhiteChip>
                    </div>

                    <div className="mt-4">
                      <Input
                        typeof="text"
                        placeholder="Type here..."
                        value={searchTerm}
                        onChange={handleOnChangeInput}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Col>
    </>
  );
};

export default SearchTabs;
