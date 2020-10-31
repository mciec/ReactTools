import { Reducer } from "../../../node_modules/redux";
import {
  FilterTransformation,
  ModifySource,
  PrefixSuffixTransformation,
  Transformation,
  Transformer,
  UserAction,
} from "./types";

const doTransformation = function (
  src: string,
  transformation: Transformation | null
): string {
  let pst = transformation as PrefixSuffixTransformation;
  let sft = transformation as FilterTransformation;

  if (pst != null) {
    let lines: string[] = src.split("\r");
    let dst = lines.map((line) => pst.Prefix + line + pst.Suffix);
    let res: string = dst.join("\r");
    return res;
  } else if (sft != null) {
    let lines: string[] = src.split("\r");
    let dst = lines.filter((line) => (sft.FilterLine(line) ? line : ""));
    let res: string = dst.join("\r");
    return res;
  }
  return src;
};

export const TransformerReducer: Reducer<Transformer, UserAction> = (s, a) => {
  let res: Transformer = {
    Src: { Text: "" },
    Dst: { Text: "" },
    Transformation: null,
  };
  if (s === undefined) {
    return res;
  }

  switch (a.type) {
    case "MODIFY_SOURCE":
      let mst: ModifySource = a.payload as ModifySource;
      if (mst != null)
        return {
          ...s,
          Src: { Text: mst.Text },
          Dst: { Text: doTransformation(mst.Text, s.Transformation) },
        };
      break;

    case "SET_PREFIX_SUFFIX":
      let pst: PrefixSuffixTransformation = a.payload as PrefixSuffixTransformation;
      if (pst != null)
        return {
          ...s,
          Dst: { Text: doTransformation(s.Src.Text, pst) },
          Transformation: pst,
        };
      break;

    case "SET_SIMPLE_FILTER":
      let ft: FilterTransformation = a.payload as FilterTransformation;
      if (ft != null)
        return {
          ...s,
          Dst: { Text: doTransformation(s.Src.Text, ft) },
          Transformation: ft,
        };
      break;
  }
  return res;
};
