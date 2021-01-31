import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { TextTransformer } from "./TextTransformer/types";
import { TransformerReducer } from "./TextTransformer/reducer";


const initialState: TextTransformer = {
  Src: { Text: "" },
  Dst: { Text: "" },
  Transformations: [{ Prefix: "", Suffix: "" }],
};

const store = createStore<TextTransformer, any, any, any>(TransformerReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
