import { SrcText } from "../SrcText/types";
import { DstText } from "../DstText/types";

export const MODIFY_SOURCE = "MODIFY_SOURCE";
export const CHANGE_TRANSFORMATION = "CHANGE_TRANSFORMATION";
export const ADD_TRANSFORMATION = "ADD_TRANSFORMATION";

export enum FilterType {
  NotStartingWithA = "Not starting with A",
  ShorterThan10Chars = "Shorter than 10 chars",
}

export type SourceText = {
  Text: string;
};

export type PrefixSuffixTransformation = {
  Prefix: string;
  Suffix: string;
};

export type FilterTransformation = {
  FilterName: FilterType;
  FilterFunc(line: string): boolean;
};

export type Transformation = PrefixSuffixTransformation | FilterTransformation;

export interface ModifySourceAction {
  type: typeof MODIFY_SOURCE;
  payload: SourceText;
}

export interface ChangeTransformationAction {
  type: typeof CHANGE_TRANSFORMATION;
  payload: Transformation;
}

export interface AddTransformationAction {
  type: typeof ADD_TRANSFORMATION;
  payload: Transformation;
}

export type UserAction =
  | ModifySourceAction
  | ChangeTransformationAction
  | AddTransformationAction;

export type Transformer = {
  Src: SrcText;
  Dst: DstText;
  Transformation: Transformation | null;
};

export function isPrefixSuffixTransformation(
  t: Transformation
): t is PrefixSuffixTransformation {
  return (t as PrefixSuffixTransformation).Prefix !== undefined;
}

export function isFilterTransformation(
  t: Transformation
): t is FilterTransformation {
  return (t as FilterTransformation).FilterName !== undefined;
}
