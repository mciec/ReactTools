import React, { FunctionComponent } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { PrefixSuffixTransformation } from "../../state/TextTransformer/types";

type ObjectProps = {
  transformation: PrefixSuffixTransformation;
};

type FunctionProps = {
  changePrefixSuffix: (prefix: string, suffix: string) => any;
};

const transformationItemPrefixSuffix: FunctionComponent<
  ObjectProps & FunctionProps
> = (props) => {
  const changePrefix = (event: React.ChangeEvent<HTMLInputElement>) =>
    props.changePrefixSuffix(event.target.value, props.transformation.Suffix);
  const changeSuffix = (event: React.ChangeEvent<HTMLInputElement>) =>
    props.changePrefixSuffix(props.transformation.Prefix, event.target.value);

  return (
    <Form.Group as={Row} controlId="prefixSuffixGroup" className="mb-1">
      <Form.Label column={true} xs={1}>
        Prefix
      </Form.Label>
      <Col>
        <Form.Control
          as="input"
          id="prefix"
          placeholder="Prefix"
          value={props.transformation.Prefix}
          onChange={changePrefix}
        />
      </Col>

      <Form.Label column={true} xs={1}>
        Suffix
      </Form.Label>
      <Col>
        <Form.Control
          as="input"
          id="suffix"
          placeholder="Suffix"
          value={props.transformation.Suffix}
          onChange={changeSuffix}
        />
      </Col>
    </Form.Group>
  );
};

export const TransformationItemPrefixSuffix = transformationItemPrefixSuffix;
