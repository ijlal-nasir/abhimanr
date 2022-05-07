import React, { useState } from "react";
import {
  Col,
  TabContent,
  TabPane,
  Row,
  Card,
  CardHeader,
  CardBody,
  Input,
  InputGroup,
  InputGroupText,
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
                      <InputGroup
                        style={{
                          background: "#f5f6f7",
                        }}
                      >
                        <InputGroupText
                          style={{ background: "transparent", border: "none" }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#afb8c5"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-search"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>
                        </InputGroupText>
                        <Input
                          typeof="text"
                          placeholder="Type here..."
                          value={searchTerm}
                          onChange={handleOnChangeInput}
                          style={{
                            border: "none",
                            background: "#f5f6f7",
                          }}
                        />
                      </InputGroup>
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
