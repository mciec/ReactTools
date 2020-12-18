import React, { FunctionComponent } from "react";
import "../../App.css";
import { TextTransformer } from "../../state/TextTransformer/types";
import { SrcText } from "../../state/SrcText/types";
import { ModifySource } from "../../state/TextTransformer/actions";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";

type ObjectProps = {
  srcText: SrcText;
};

type FunctionProps = {
  changeSrcText: (src: string) => any;
};

const inputBox: FunctionComponent<ObjectProps & FunctionProps> = (props) => {
  const HandleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let a: string = event.target.value;
    props.changeSrcText(a);
  };

  return (
    <Form.Control
      as="textarea"
      rows={20}
      id="MySrcText"
      value={props.srcText.Text}
      onChange={HandleChange}
    />
  );
};

const mapStateToProps = function (state: TextTransformer): ObjectProps {
  return {
    srcText: state.Src,
  };
};

const mapDispatchToProps = function (dispatch: any): FunctionProps {
  return {
    changeSrcText: (s) => dispatch(ModifySource(s)),
  };
};

export const InputBox = connect(mapStateToProps, mapDispatchToProps)(inputBox);
