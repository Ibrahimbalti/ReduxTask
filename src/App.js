import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
