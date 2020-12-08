import React, { FunctionComponent } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { InputBox } from "./InputBox/InputBox";
import { OutputBox } from "./OutputBox/OutputBox";
import { TransformationItem } from "./TransformationItem/TransformationItem";

export const Transformer: FunctionComponent = () => {
  return (
    <div>
      <Form>
        <Form.Row className="mx-0">
          <Col>
            <InputBox />
          </Col>
          <Col>
            <TransformationItem />
          </Col>
          <Col>
            <OutputBox />
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};
