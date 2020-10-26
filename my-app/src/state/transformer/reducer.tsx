import { Reducer } from "../../../node_modules/redux";
import {
  FilterTransformation,
  ModifySourceTransformation,
  PrefixSuffixTransformation,
  Transformer,
  UserAction,
} from "./types";

const TransformerReducer: Reducer<Transformer, UserAction> = (s, a) => {
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
      let mst: ModifySourceTransformation = a.payload as ModifySourceTransformation;
      if (mst != null) {
        let res: Transformer = {
          Src: { Text: mst.Text },
          Dst: { Text: mst.Text },
          Transformation: null,
        };
        return res;
      }
      break;

    case "SET_PREFIX_SUFFIX":
      let pst: PrefixSuffixTransformation = a.payload as PrefixSuffixTransformation;
      if (pst != null) {
        let lines: string[] = s?.Src.Text.split("\r");
        let dst = lines.map((line) => pst.Prefix + line + pst.Suffix);
        let res: Transformer = {
          Src: { Text: s.Src.Text },
          Dst: { Text: dst.join("\r") },
          Transformation: pst,
        };
        return res;
      }
      break;

    case "SET_SIMPLE_FILTER":
      let ft: FilterTransformation = a.payload as FilterTransformation;
      if (ft != null) {
        let lines: string[] = s?.Src.Text.split("\r");
        let dst = lines.filter((line) => (ft.FilterLine(line) ? line : ""));
        let res: Transformer = {
          Src: { Text: s.Src.Text },
          Dst: { Text: dst.join("\r") },
          Transformation: ft,
        };
        return res;
      }
      break;

    default:
      break;
  }
  return res;
};
