import React, { FunctionComponent } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { PrefixSuffixTransformation } from "../../state/Transformer/types";

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
    <React.Fragment>
      <span className="float-left" id="prefixGroup">
        <label label-for="aaa">Prefix</label>
        <Form.Control
          as="input"
          id="aaa"
          placeholder="Prefix"
          value={props.transformation.Prefix}
          onChange={changePrefix}
        />
      </span>

      <span className="float-right">
        <label label-for="bbb">Suffix</label>
        <Form.Control
          as="input"
          id="bbb"
          placeholder="Suffix"
          value={props.transformation.Suffix}
          onChange={changeSuffix}
        />
      </span>
    </React.Fragment>
  );
};

export const TransformationItemPrefixSuffix = transformationItemPrefixSuffix;
