import React, { FunctionComponent } from "react";
import "../../App.css";
import { Transformer } from "../../state/transformer/types";
import { SrcText } from "../../state/srcText/types";
import { ModifySource } from "../../state/transformer/actions";
import { connect } from "react-redux";

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
    <textarea
      id="MySrcText"
      //value={}
      onChange={HandleChange}
      rows={20}
      cols={80}
    ></textarea>
  );
};

const mapStateToProps = function (state: Transformer): ObjectProps {
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
