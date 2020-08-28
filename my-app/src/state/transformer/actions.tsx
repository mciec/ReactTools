import { changeTransformationActionTypes, TRANSFORMATION_TYPE, CHANGE_TRANSFORMATION_TYPE, lineTransformFunction } from "./types";

export function addPrefixSuffix(
  prefix: string,
  suffix: string
): changeTransformationActionTypes {
  return {
    type: CHANGE_TRANSFORMATION_TYPE,
    payload: {
      transformationType: "PREFIX_SUFFIX",
      parameters: [prefix, suffix],
    },
  };
}

export function addSimpleFilter(
  fun: lineTransformFunction
): changeTransformationActionTypes {
  return {
    type: CHANGE_TRANSFORMATION_TYPE,
    payload: {
      transformationType: "SIMPLE_FILTER",
      parameters: fun
    },
  };
}