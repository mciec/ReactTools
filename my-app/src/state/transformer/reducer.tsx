import { Reducer } from "redux";
import {
  SourceText,
  Transformation,
  Transformer,
  UserAction,
  MODIFY_SOURCE,
  CHANGE_TRANSFORMATION,
  isPrefixSuffixTransformation,
  isFilterTransformation,
} from "./types";

const doTransformation = function (
  src: string,
  transformation: Transformation | null
): string {
  if (transformation == null) return src;

  if (isPrefixSuffixTransformation(transformation)) {
    let lines: string[] = src.split("\n");
    let dst = lines.map(
      (line) => transformation.Prefix + line + transformation.Suffix
    );
    let res: string = dst.join("\n");
    return res;
  } else if (isFilterTransformation(transformation)) {
    let lines: string[] = src.split("\n");
    let dst = lines.filter((line) =>
      transformation.FilterFunc(line) ? line : ""
    );
    let res: string = dst.join("\n");
    return res;
  }
  return src;
};

export const TransformerReducer: Reducer<Transformer, UserAction> = (s, a) => {
  if (s === undefined) {
    return {
      Src: { Text: "" },
      Dst: { Text: "" },
      Transformation: null,
    };
  }

  switch (a.type) {
    case MODIFY_SOURCE:
      let mst: SourceText = a.payload as SourceText;
      if (mst != null)
        return {
          ...s,
          Src: { Text: mst.Text },
          Dst: { Text: doTransformation(mst.Text, s.Transformation) },
        };
      break;

    case CHANGE_TRANSFORMATION:
      return {
        ...s,
        Dst: { Text: doTransformation(s.Src.Text, a.payload) },
        Transformation: a.payload,
      };
  }
  return s;
};
