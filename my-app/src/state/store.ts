import { createStore } from 'redux';
import { Transformer } from "./transformer/types";
import { TransformerReducer } from "./transformer/reducer";

const store = createStore<Transformer, any, any, any>(TransformerReducer);

export default store;