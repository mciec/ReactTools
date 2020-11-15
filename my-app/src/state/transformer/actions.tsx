import {
  ADD_TRANSFORMATION,
  CHANGE_TRANSFORMATION,
  MODIFY_SOURCE,
  Transformation,
  UserAction,
} from "./types";

export function ModifySource(str: string): UserAction {
  return {
    type: MODIFY_SOURCE,
    payload: {
      Text: str,
    },
  };
}

export function SetTransformation(t: Transformation): UserAction {
  return {
    type: CHANGE_TRANSFORMATION,
    payload: t,
  };
}

export function AddTransformation(t: Transformation): UserAction {
  return {
    type: ADD_TRANSFORMATION,
    payload: t,
  };
}
