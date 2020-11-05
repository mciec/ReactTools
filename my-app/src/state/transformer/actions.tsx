import {
  Transformation,
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

export function SetTransformation(t: Transformation): UserAction {
  return {
    type: "CHANGE_TRANSFORMATION",
    payload: t,
  };
}
