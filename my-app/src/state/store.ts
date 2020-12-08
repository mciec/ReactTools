import { createStore } from "redux";
import { Transformer } from "./Transformer/types";
import { TransformerReducer } from "./Transformer/reducer";

const initialState: Transformer = {
  Src: { Text: "" },
  Dst: { Text: "" },
  Transformations: [{ Prefix: "", Suffix: "" }],
};

const store = createStore<Transformer, any, any, any>(
  TransformerReducer,
  initialState
);

export default store;
