import { SrcText } from "../SrcText/types";
import { DstText } from "../DstText/types";

export type ActionType =
  | "MODIFY_SOURCE"
  | "CHANGE_TRANSFORMATION"

export type ModifySource = {
  Text: string;
};

export type PrefixSuffixTransformation = {
  Prefix: string;
  Suffix: string;
};

export type FilterTransformation = {
  Name: string;
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
  payload: ModifySource | Transformation | undefined;
};
