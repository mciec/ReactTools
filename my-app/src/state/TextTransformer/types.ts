import { SrcText } from "../SrcText/types";
import { DstText } from "../DstText/types";
import { Transform } from "stream";
export const MODIFY_SOURCE = "MODIFY_SOURCE";
export const CHANGE_TRANSFORMATION = "CHANGE_TRANSFORMATION";
export const ADD_TRANSFORMATION = "ADD_TRANSFORMATION";
export const REMOVE_TRANSFORMATION = "REMOVE_TRANSFORMATION";
export const EXEC_TRANSFORMATIONS_REQ = "EXEC_TRANSFORMATIONS_REQ";
export const EXEC_TRANSFORMATIONS_SUCCESS = "EXEC_TRANSFORMATIONS_SUCCESS";
export const EXEC_TRANSFORMATIONS_ERR = "EXEC_TRANSFORMATIONS_ERR";

export enum TransformationType {
  PrefixSuffix,
  Filter,
}

export type SourceText = {
  Text: string;
};

type BaseTransformation = {
  Type: TransformationType;
};

export type PrefixSuffixTransformation = {
  Prefix: string;
  Suffix: string;
} & BaseTransformation;

export type FilterTransformation = {
  FilterParam: string;
} & BaseTransformation;

export type Transformation = PrefixSuffixTransformation | FilterTransformation;

export interface ModifySourceAction {
  type: typeof MODIFY_SOURCE;
  payload: SourceText;
}

export interface ChangeTransformationAction {
  type: typeof CHANGE_TRANSFORMATION;
  payload: { index: number; transformation: Transformation };
}

export interface AddTransformationAction {
  type: typeof ADD_TRANSFORMATION;
  payload: Transformation;
}

export interface RemoveTransformationAction {
  type: typeof REMOVE_TRANSFORMATION;
  payload: number;
}

// export interface ExecTransformationAction {
//   type: typeof EXEC_TRANSFORMATIONS;
// }

export interface ExecTransformationsReqAction {
  type: typeof EXEC_TRANSFORMATIONS_REQ;
  payload: {
    Text: string;
    Transformations: Transformation[];
  };
}

export interface ExecTransformationsSuccessAction {
  type: typeof EXEC_TRANSFORMATIONS_SUCCESS;
  payload: {
    Text: string;
  };
}

export interface ExecTransformationsErrAction {
  type: typeof EXEC_TRANSFORMATIONS_ERR;
  payload: {
    Text: string;
  };
}

export type UserAction =
  | ModifySourceAction
  | ChangeTransformationAction
  | AddTransformationAction
  | RemoveTransformationAction
  | ExecTransformationsReqAction
  | ExecTransformationsSuccessAction
  | ExecTransformationsErrAction;

export type TextTransformer = {
  Src: SrcText;
  Dst: DstText;
  Transformations: Transformation[];
};

export function isPrefixSuffixTransformation(
  t: Transformation
): t is PrefixSuffixTransformation {
  return (
    (t as PrefixSuffixTransformation).Prefix !== undefined ||
    (t as PrefixSuffixTransformation).Suffix !== undefined
  );
}

export function isFilterTransformation(
  t: Transformation
): t is FilterTransformation {
  return (t as FilterTransformation).FilterParam !== undefined;
}
