import { SrcText } from "../SrcText/types";
import { DstText } from "../DstText/types";

export type ActionType = "MODIFY_SOURCE" | "SET_PREFIX_SUFFIX" | "SET_SIMPLE_FILTER";

export type ModifySourceTransformation = {
  Text: string;
}

export type PrefixSuffixTransformation = {
  Prefix: string;
  Suffix: string;
}

export type FilterTransformation = {
  FilterLine(line: string): boolean;
}

export type Transformer = {
  Src: SrcText;
  Dst: DstText;
  Transformation: PrefixSuffixTransformation | FilterTransformation | null;
}

export type UserAction = {
  type: ActionType;
  payload:
    | ModifySourceTransformation
    | PrefixSuffixTransformation
    | FilterTransformation;
}