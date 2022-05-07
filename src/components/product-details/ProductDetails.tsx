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

const ProductDetails = () => {
  return (
    <Card>
      <CardHeader className="bg-white">Product Details</CardHeader>
      <CardBody className="pt-4">
        <CardSubtitle className="fs-6">Foxit Software</CardSubtitle>
        <div className="mt-2">
          <BlueChip>Software Development</BlueChip>
          <BlueChip>Daily Business</BlueChip>
          <BlueChip>Graphic Editors</BlueChip>
          <BlueChip>Text Editors</BlueChip>
        </div>

        <Button color="info" className="text-white mt-4">
          Go to Manufacturer
        </Button>

        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic incidunt
          assumenda amet commodi? Nesciunt enim iste, eaque doloribus odio
          veritatis quas totam possimus voluptates tempore quidem, pariatur
          aspernatur inventore dolores!
        </p>

        <FormGroup check>
          <Label check>
            <Input type="radio" /> Option 1
          </Label>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos
            numquam dicta quod eum, ullam sapiente in architecto magnam corrupti
            nisi dignissimos itaque? Eligendi dignissimos quia nam qui fugit
            ipsum.
          </p>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="radio" /> Option 2
          </Label>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos
            numquam dicta quod eum, ullam sapiente in architecto magnam corrupti
            nisi dignissimos itaque? Eligendi dignissimos quia nam qui fugit
            ipsum.
          </p>
        </FormGroup>
      </CardBody>
    </Card>
  );
};

export default ProductDetails;
