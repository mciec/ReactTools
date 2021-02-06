import React, { FunctionComponent } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { InputBox } from "./inputBox/InputBox";
import { OutputBox } from "./outputBox/OutputBox";
import { TransformationItems } from "./TransformationItems/TransformationItems";

export const Transformer: FunctionComponent = () => {
  return (
    <div>
      <Form>
        <Form.Row className="mx-0">
          <Col>
            <InputBox />
          </Col>
          <Col>
            <TransformationItems />
          </Col>
          <Col>
            <OutputBox />
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};
