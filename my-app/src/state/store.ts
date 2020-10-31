import { createStore } from 'redux';
import { Transformer } from "./transformer/types";
import { TransformerReducer } from "./transformer/reducer";

const initialState: Transformer = {
    Src: { Text: "dupa\rdupa2" },
    Dst: { Text: "" },
    Transformation: { Prefix: "---", Suffix: "+++" },
  };
  

const store = createStore<Transformer, any, any, any>(TransformerReducer, initialState);

export default store;