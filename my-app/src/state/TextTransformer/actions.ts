import {
  ADD_TRANSFORMATION,
  CHANGE_TRANSFORMATION,
  MODIFY_SOURCE,
  REMOVE_TRANSFORMATION,
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

export function SetTransformation(i: number, t: Transformation): UserAction {
  return {
    type: CHANGE_TRANSFORMATION,
    payload: {
      index: i,
      transformation: t,
    },
  };
}

export function AddTransformation(t: Transformation): UserAction {
  return {
    type: ADD_TRANSFORMATION,
    payload: t,
  };
}

export function RemoveTransformation(i: number): UserAction {
  return {
    type: REMOVE_TRANSFORMATION,
    payload: i,
  };
}
