import { SrcText } from "../srcText/types";
import { DstText } from "../dstText/types";

export type ActionType =
  | "MODIFY_SOURCE"
  | "SET_PREFIX_SUFFIX"
  | "SET_SIMPLE_FILTER";

export type ModifySource = {
  Text: string;
};

export type PrefixSuffixTransformation = {
  Prefix: string;
  Suffix: string;
};

export type FilterTransformation = {
  FilterLine(line: string): boolean;
};

export type Transformation = PrefixSuffixTransformation | FilterTransformation;

export type Transformer = {
  Src: SrcText;
  Dst: DstText;
  Transformation: Transformation | null;
};

export type UserAction = {
  type: ActionType;
  payload: ModifySource | Transformation;
};
