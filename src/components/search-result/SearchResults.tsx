import React, { useState } from "react";
import { Card, CardBody, CardSubtitle, Col } from "reactstrap";
import { BlueChip } from "../chip/Chip";

type Props = {
  item: any;
  handleOnClick: (x: any) => void;
  active: boolean;
};

const SearchResult: React.FC<Props> = ({ item, handleOnClick, active }) => {
  // const [selected, setSelected] = useState<string | null>(null);
  // const handleItemClick = () => {
  //   // setSelected(null);
  //   // setSelected(item.productName !== selected ? item.productName : null);
  //   // console.log("item::details=>>", item);
  // };

  return (
    <Col
      md={12}
      className={`my-1`}
      style={{ cursor: "pointer" }}
      onClick={() => handleOnClick(item)}
    >
      <Card
        id="searchItemCard"
        className={`shadow-sm ${active ? "border-info" : ""}`}
      >
        <CardBody className="d-flex align-items-center justify-content-between">
          <div>
            <CardSubtitle>{item.productName}</CardSubtitle>
            <div className="mt-2 d-flex flex-wrap" style={{ minWidth: "80%" }}>
              {item.tags.map((tag: string, index: number) => (
                <BlueChip key={index} classes="mt-2">
                  {tag}
                </BlueChip>
              ))}
            </div>
          </div>
          <div
            style={{
              width: "20%",
            }}
          >
            <p
              className="text-muted m-0"
              style={{
                fontSize: "12px",
                textAlign: "right",
              }}
            >
              {item.category}
            </p>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SearchResult;
