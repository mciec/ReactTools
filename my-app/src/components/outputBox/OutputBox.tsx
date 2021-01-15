import React, { FunctionComponent } from "react";
import "../../App.css";
import { DstText } from "../../state/DstText/types";
import { TextTransformer } from "../../state/TextTransformer/types";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";

type ObjectProps = {
  dstText: DstText;
};

const outputBox: FunctionComponent<ObjectProps> = (props) => {
  return (
    <Form.Control
      as="textarea"
      rows={20}
      id="MyDstText"
      value={props.dstText.Text}
      readOnly
    />
  );
};

const mapStateToProps = function (state: TextTransformer): ObjectProps {
  return {
    dstText: state.Dst,
  };
};

export const OutputBox = connect(mapStateToProps)(outputBox);
