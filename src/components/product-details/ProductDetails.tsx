import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardSubtitle,
  Badge,
  Button,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { BlueChip } from "../chip/Chip";

type Props = {
  item: any;
};

const ProductDetails: React.FC<Props> = ({ item }) => {
  console.log("item::details", item);

  return (
    <Card>
      <CardHeader className="bg-white">Product Details</CardHeader>
      <CardBody className="pt-4">
        <CardSubtitle className="fs-6">{item.productName}</CardSubtitle>
        <div className="mt-2">
          {item.tags.map((tag: string, index: number) => (
            <BlueChip key={index} classes="mt-2">
              {tag}
            </BlueChip>
          ))}
        </div>

        <a
          href={item.manufacturerUrl}
          target="_blank"
          rel="no-referer"
          color="info"
          className="btn btn-info text-white mt-4"
        >
          Go to Manufacturer
        </a>

        <p className="mt-4">{item.description}</p>

        <FormGroup check>
          <Label check>
            <Input type="radio" name="productOption" /> {item.option1}
          </Label>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos
            numquam dicta quod eum.
          </p>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="radio" name="productOption" /> {item.option2}
          </Label>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos
            numquam dicta quod eum.
          </p>
        </FormGroup>
      </CardBody>
    </Card>
  );
};

export default ProductDetails;
