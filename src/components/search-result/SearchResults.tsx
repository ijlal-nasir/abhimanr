import React from "react";
import { Badge, Card, CardBody, CardSubtitle, Col } from "reactstrap";
import { BlueChip } from "../chip/Chip";

type Props = {
  item: any;
};

const SearchResult: React.FC<Props> = ({ item }) => {
  console.log("item", item);

  return (
    <Col md={12} className="my-1">
      <Card className="shadow-sm">
        <CardBody className="d-flex align-items-center justify-content-between">
          <div>
            <CardSubtitle>{item.productName}</CardSubtitle>
            <div className="d-flex justify-content-start mt-2">
              {item.tags.map((tag: string, index: number) => (
                <BlueChip key={index}>{tag}</BlueChip>
              ))}
            </div>
          </div>
          <div>
            <p
              className="text-muted m-0"
              style={{
                fontSize: "12px",
              }}
            >
              Daily Business
            </p>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SearchResult;
