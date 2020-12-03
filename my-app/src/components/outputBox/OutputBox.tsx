import React, { FunctionComponent } from "react";
import "../../App.css";
import { DstText } from "../../state/DstText/types";
import { Transformer } from "../../state/Transformer/types";
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
    />
  );
};

const mapStateToProps = function (state: Transformer): ObjectProps {
  return {
    dstText: state.Dst,
  };
};

export const OutputBox = connect(mapStateToProps)(outputBox);
