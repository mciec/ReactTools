import { APICALL_ACTION } from "../state/TextTransformer/types";
import { ApiCallType } from "./ApiCallType";
import { ThunkAction, ThunkDispatch } from "redux-thunk";

const baseApiCall: thunk = (
  endpoint: string,
  action: APICALL_ACTION
) => {};
