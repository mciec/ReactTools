import { createStore } from "redux";
import { TextTransformer } from "./TextTransformer/types";
import { TransformerReducer } from "./TextTransformer/reducer";

const initialState: TextTransformer = {
  Src: { Text: "" },
  Dst: { Text: "" },
  Transformations: [{ Prefix: "", Suffix: "" }],
};

const store = createStore<TextTransformer, any, any, any>(
  TransformerReducer,
  initialState
);

export default store;
