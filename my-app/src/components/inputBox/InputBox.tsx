import React, { FunctionComponent } from "react";
import "../App.css";
import { Transformer } from "../../state/transformer/types";
import { SrcText } from "../../state/srcText/types";
import { stat } from "fs";
import { Transformer } from "../Transformer";


type ObjectProps = {
  srcText: SrcText;
};

type FunctionProps = {
  changeSrcText: (src: string) => any;
};

const InputBox: FunctionComponent<ObjectProps & FunctionProps> = (props) => {
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

const MapStateToProps = function(state: Transformer) : ObjectProps {
  return {
    srcText: state.Src
  }
}

const MapDispatchToProps = function(state: Transformer) : FunctionProps {
  return {
    changeSrcText: (s) => dispatch()
  }
}








