import React, { FunctionComponent } from "react";
import "../../App.css";
import { DstText } from "../../state/dstText/types";
import { Transformer } from "../../state/transformer/types";
import { ModifySource } from "../../state/transformer/actions";
import { connect } from "react-redux";

type ObjectProps = {
  dstText: DstText;
};

const outputBox: FunctionComponent<ObjectProps> = (props) => {
  return (
    <textarea
      id="MyDstText"
      value={props.dstText.Text}
      rows={20}
      cols={80}
    ></textarea>
  );
};

const mapStateToProps = function (state: Transformer): ObjectProps {
  return {
    dstText: state.Dst,
  };
};

export const OutputBox = connect(mapStateToProps)(outputBox);
