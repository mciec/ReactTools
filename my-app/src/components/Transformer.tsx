import React, { FunctionComponent } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { DstText } from "../state/DstText/types";
import { SrcText } from "../state/SrcText/types";
import { InputBox } from "./InputBox/InputBox";
import { OutputBox } from "./OutputBox/OutputBox";
import { TransformationItem } from "./TransformationItem/TransformationItem";

type Props = {
  srcText: SrcText;
  dstText: DstText;
  changeSrcText: (src: string) => any;
};

export const Transformer: FunctionComponent = () => {
  return (
    <Form>
      <Form.Row>
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
  );
};
