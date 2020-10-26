import React, { FunctionComponent } from "react";

import "../App.css";
import { SrcText } from "../state/SrcText/types";

type Props = {
  srcText: SrcText;
  changeSrcText: (src: string) => any;
};

export const InputBox: FunctionComponent<Props> = (props) => {
  const HandleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let a: string = event.target.value;
    props.changeSrcText(a);
  };

  return (
    <textarea
      id="MySourceText"
      //value={}
      onChange={HandleChange}
      rows={20}
      cols={80}
    ></textarea>
  );
};
