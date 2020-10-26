import {
  FilterTransformation,
  PrefixSuffixTransformation,
  UserAction,
} from "./types";

export function ModifySource(str: string): UserAction {
  return {
    type: "MODIFY_SOURCE",
    payload: {
      Text: str,
    },
  };
}

export function AddPrefixSuffix(
  prefixSuffix: PrefixSuffixTransformation
): UserAction {
  return {
    type: "SET_PREFIX_SUFFIX",
    payload: prefixSuffix,
  };
}

export function AddSimpleFilter(func: FilterTransformation): UserAction {
  return {
    type: "SET_SIMPLE_FILTER",
    payload: func,
  };
}
