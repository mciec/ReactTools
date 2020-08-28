import { srcText } from "../srcText/types";
import { dstText } from "../dstText/types";

export interface transformer {
    src: srcText;
    dst: dstText;
}

export const CHANGE_TRANSFORMATION_TYPE = "CHANGE_TRANSFORMATION";
export type TRANSFORMATION_TYPE = "PREFIX_SUFFIX" | "SIMPLE_FILTER" | "ANYTHING";

export type lineTransformFunction = (line: string) => string;

export interface changeTransformationTypeAction {
  type: typeof CHANGE_TRANSFORMATION_TYPE;
  payload: {
    transformationType: TRANSFORMATION_TYPE,
    parameters: string[] | lineTransformFunction
  }
};


export type changeTransformationActionTypes = changeTransformationTypeAction;