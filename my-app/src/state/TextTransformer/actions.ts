import {
  ADD_TRANSFORMATION,
  CHANGE_TRANSFORMATION,
  MODIFY_SOURCE,
  REMOVE_TRANSFORMATION,
  EXEC_TRANSFORMATIONS,
  EXEC_TRANSFORMATIONS_ASYNC,
  Transformation,
  UserAction,
} from "./types";
import { createAsyncThunk, AsyncThunkPayloadCreator } from "@reduxjs/toolkit";

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

export function ExecTransformations(): UserAction {
  return {
    type: EXEC_TRANSFORMATIONS,
  };
}

export const fetchTodos = createAsyncThunk(
  EXEC_TRANSFORMATIONS_ASYNC,
  async (l: string) => {
    const response: Number = 7; //await client.get('/fakeApi/todos')
    return response;
  }
);
