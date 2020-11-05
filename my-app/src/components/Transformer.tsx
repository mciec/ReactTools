import React, { FunctionComponent } from "react";
import { DstText } from "../state/DstText/types";
import { SrcText } from "../state/SrcText/types";
import { InputBox } from "./InputBox/InputBox";
import { OutputBox } from "./OutputBox/OutputBox";
import { TransformationItem } from "./TransformationItem/TransformationItem";

type Props = {
  srcText: SrcText;
  dstText: DstText;
  changeSrcText: (src: string) => any;
};

export const Transformer: FunctionComponent = () => {
  return (
    <div>
      <InputBox />
      <TransformationItem/>
      <OutputBox />
    </div>
  );
};
