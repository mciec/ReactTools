import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { Transformer } from "./components/Transformer";
import store from "./state/store";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Transformer />;
    </Provider>
  );
}

export default App;
