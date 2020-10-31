import React, { FunctionComponent } from "react";
import { DstText } from "../state/dstText/types";
import { SrcText } from "../state/srcText/types";
import { InputBox } from "./inputBox/InputBox";
import { OutputBox } from "./outputBox/OutputBox";

type Props = {
  srcText: SrcText;
  dstText: DstText;
  changeSrcText: (src: string) => any;
};

export const Transformer: FunctionComponent = () => {
  return (
    <div>
      <InputBox />
      <OutputBox />
    </div>
  );
};
