import {
  ADD_TRANSFORMATION,
  CHANGE_TRANSFORMATION,
  MODIFY_SOURCE,
  REMOVE_TRANSFORMATION,
  EXEC_TRANSFORMATIONS_REQ,
  EXEC_TRANSFORMATIONS_SUCCESS,
  EXEC_TRANSFORMATIONS_ERR,
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

export function ExecTransformationsReq(
  text: string,
  transformations: Transformation[]
): UserAction {
  return {
    type: EXEC_TRANSFORMATIONS_REQ,
    payload: {
      Text: text,
      Transformations: transformations,
    },
  };
}

export function ExecTransformationsSuccess(result: string): UserAction {
  return {
    type: EXEC_TRANSFORMATIONS_SUCCESS,
    payload: {
      Text: result,
    },
  };
}

export function ExecTransformationsErr(err: string): UserAction {
  return {
    type: EXEC_TRANSFORMATIONS_ERR,
    payload: {
      Text: err,
    },
  };
}
