import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { TextTransformer } from "./TextTransformer/types";
import { TransformerReducer } from "./TextTransformer/reducer";

const initialState: TextTransformer = {
  Src: { Text: "" },
  Dst: { Text: "" },
  Transformations: [],
};

// const store = createStore<TextTransformer, any, any, any>(
//   TransformerReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(createSagaMiddleware()))
// );

const store = createStore(
  TransformerReducer,
  composeWithDevTools(applyMiddleware(createSagaMiddleware()))
);

export default store;
